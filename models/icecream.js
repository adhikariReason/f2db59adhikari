const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
	cone: String,
	flavour: String,
	numOfScoops:Number
})
module.exports = mongoose.model("Icecream",icecreamSchema)