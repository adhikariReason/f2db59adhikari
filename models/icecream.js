const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
	cone: String,
	flavour: String,
	numOfScoops:Number
})
module.exports = mongoose.model("Icecream",costumeSchema)