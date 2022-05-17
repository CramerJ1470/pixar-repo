const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const characterSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},

	uploadedBy: {
		type: ObjectId,
		ref: "User",
	},

	starredIn: [{ type: String }],
	imageUrl: { type: String, required: false },
});

module.exports = new Model("Character", characterSchema);
