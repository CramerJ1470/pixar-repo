const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Movie.find()
			.then((movies) => res.send(movies))
			.catch(next);
	},

	post: (req, res, next) => {
		const {
			title,
			description,
			uploadedBy,
			charactersIn,
			reviews,
			trailerUrl,
		} = req.body;
		const { _id } = req.user;

		models.Movie.create({
			title,
			description,
			charactersIn,
			uploadedBy: _id,
			trailerUrl: trailerUrl,
			reviews: reviews,
		})
			.then((createdMovie) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { movies: createdMovie } }
					),
					models.Movie.findOne({ _id: createdMovie._id }),
				]);
			})
			.then(([modifiedObj, movieObj]) => {
				res.send(movieObj);
			})
			.catch(next);
	},
	put: (req, res, next) => {
		const { reviews, _id } = req.body;
		console.log(`put page: `,reviews,_id);
		models.Movie.update({ _id: _id }, { reviews:reviews })
			.then((updatedMovie) => res.send(updatedMovie))
			.catch(next);
	},

	

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Movie.deleteOne({ _id: id })
			.then((removedMovie) => res.send(removedMovie))
			.catch(next);
	},
};
