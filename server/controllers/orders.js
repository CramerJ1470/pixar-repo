const Order = require("../models/Order.js");

module.exports = {
	get: (req, res, next) => {
		Order.find()
			.then((orders) => res.send(orders))
			.catch(next);
	},

	post: (req, res, next) => {
		const { item, userId } = req.body;
		console.log(`userId: `, userId);
		console.log(`item: `, item);
		Order.create({ item, userId })
			.then((createdUser) => res.send(createdUser))
			.catch(next);
	},

	put: (req, res, next) => {
		const id = req.userId;
		const { items } = req.body;
		const { imageUrl, type, count, each, title } = body;
		Order.updateOne({ imageUrl, type, count, each, title })
			.then((updateOrder) => res.send(updateOrder))
			.catch(next);
	},

	delete: (req, res, next) => {
		const id = req.params.id;
		Order.deleteOne({ _id: id })
			.then((removedOrder) => res.send(removedOrder))
			.catch(next);
	},
};
