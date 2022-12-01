const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
	cone: {
		type: String,
		enum:["dipped", "regular", "iced", "fire"] 
	},
	flavour: String,
	numOfScoops:{
		type: Number,
		min: 1,
		max: 50,
	}
})
module.exports = mongoose.model("Icecream",icecreamSchema)