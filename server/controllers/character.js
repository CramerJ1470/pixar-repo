const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Character.find()
			.then((characters) => res.send(characters))
			.catch(next);
	},
	post: (req, res, next) => {
		const { description } = req.body;
		const { _id } = req.user;

		models.Character.create({ description, uploadedBy: _id })
			.then((createdCharacter) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { posts: createdCharacter } }
					),
					models.Character.findOne({ _id: createdCharacter._id }),
				]);
			})
			.then(([modifiedObj, characterObj]) => {
				res.send(characterObj);
			})
			.catch(next);
	},
	put: (req, res, next) => {
		const id = req.params.id;
		const { description } = req.body;
		models.Character.updateOne({ _id: id }, { description })
			.then((updatedCharacter) => res.send(updatedCharacter))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Character.deleteOne({ _id: id })
			.then((removedCharacter) => res.send(removedCharacter))
			.catch(next);
	},
};
