var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var icecream_controller = require('../controllers/icecream');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ICECREAM ROUTES ///
// POST request for creating a Icecream.
router.post('/icecream', icecream_controller.icecream_create_post);
// DELETE request to delete Icecream.
router.delete('/icecream/:id', icecream_controller.icecream_delete);
// PUT request to update Icecream.
router.put('/icecream/:id', icecream_controller.icecream_update_put);
// GET request for one Icecream.
router.get('/icecream/:id', icecream_controller.icecream_detail);
// GET request for list of all Icecream items.
router.get('/icecream', icecream_controller.icecream_list);
module.exports = router;