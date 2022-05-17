const Cart = require("../models/Cart.js");

module.exports = {
	get: (req, res, next) => {
		Cart.find()
			.then((carts) => res.send(carts))
			.catch(next);
	},

	post: async (req, res, next) => {
		console.log(req);
		const { imageUrl, title, count, each, type, customer, _id } = req.body;

		console.log(imageUrl, title, count, each, type, customer, _id);

		// console.log(`Cart: `, Cart);
		await Cart.create({
			_id: _id,
			imageUrl: imageUrl,
			title: title,
			count: count,
			each: each,
			type: type,
			customer: customer,
		})
			.then((cartObj) => {
				res.json(cartObj);
			})
			.catch(next);
	},

	put: (req, res, next) => {
		const id = req.user;
		const { body } = req.body;
		const { imageUrl, type, count, each, title, customer } = body;
		Cart.updateOne({ imageUrl, type, count, each, title, customer, _id })
			.then((updateCart) => res.send(updateCart))
			.catch(next);
	},

	delete: async (req, res, next) => {
		const customer = { customer: req.user._id };
		console.log(`delete cust: `, customer);

		await Cart.deleteMany( customer );
	},

	//	.then((removedCart) => res.send(removedCart))
	//	.catch(next);
};
