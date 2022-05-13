const mongoose = require("mongoose")

const treatmentSchema = mongoose.Schema({
	name: {
		required: true,
		type: "string",
	},
	slots: {
		type: Array,
		default: [],
	},
	data: {
		type: Date,
		default: Date.now(),
	},
})

module.exports = treatmentSchema
