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
exports.icecream_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream create POST');
};
// Handle Icecream delete form on DELETE.
exports.icecream_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.icecream_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};