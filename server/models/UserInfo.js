const Address = require("/Address");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userInfoSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: Object,
		ref: Address,
		required: true,
	},
});

module.exports = new Model("UserInfo", userInfoSchema);
