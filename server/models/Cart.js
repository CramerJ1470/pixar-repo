const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const cartSchema = new Schema({
	imageUrl: { type: String, required: true },
	type: { type: String, required: true },
	count: { type: String, required: true },
	each: { type: String, required: true },
	title: { type: String, required: true },
	_id: { type: ObjectId, required: true },
	customer: { type: String, required: true },
});

module.exports = new Model("Cart", cartSchema);
