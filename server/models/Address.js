const createApplication = require("express/lib/express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const addressSchema = new Schema({
	housenumber: {
		type: Number,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	town: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	zipcode: {
		type: Number,
		required: true,
	},
});

module.exports = new Model("Address", addressSchema);
