const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const movieSchema = new Schema({
	title: {
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
	reviews: {
		type: Array,
	},

	charactersIn: [{ type: ObjectId, ref: "Movie" }],
	trailerUrl: { type: String },
	imageUrl: { type: String },
});

module.exports = new Model("Movie", movieSchema);
