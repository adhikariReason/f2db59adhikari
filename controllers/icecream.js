var Icecream = require('../models/Icecream');
// List of all Icecream
exports.icecream_list = async function(req, res) {
	try{
		theIcecream = await Icecream.find();
		res.send(theIcecream);
	}
	catch(err){
		res.status(500);
		res.send(`{"error": ${err}}`);
	}
   };
// for a specific Icecream.
exports.icecream_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream detail: ' + req.params.id);
};
// Handle Icecream create on POST.
exports.icecream_create_post = async function(req, res) {
	console.log(req.body)
	let document = new Icecream();
	// We are looking for a body, since POST does not have query parameters.
	// Even though bodies can be in many different formats, we will be picky
	// and require that it be a json object
	// {"costume_type":"goat", "cost":12, "size":"large"}
	document.cone = req.body.cone;
	document.flavour = req.body.flavour;
	document.numOfScoops = req.body.numOfScoops;
	try{
	let result = await document.save();
	res.send(result);
	}
	catch(err){
	res.status(500);
	res.send(`{"error": ${err}}`);
	}
   };
// Handle Icecream delete form on DELETE.
exports.icecream_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.icecream_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function(req, res) {
	try{
		theIcecream = await Icecream.find();
		res.render('Icecream', { title: 'Icecream Search Results', results: theIcecream });
	}
	catch(err){
		res.status(500);
		res.send(`{"error": ${err}}`);
	}
   };