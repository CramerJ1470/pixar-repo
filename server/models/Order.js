const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;

const orderSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	item: {
		type: Array,

		required: true,
	},
});

module.exports = new Model("Order", orderSchema);
