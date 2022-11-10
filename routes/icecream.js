var express = require('express');
const icecream_controllers= require('../controllers/icecream');
var router = express.Router();
/* GET icecream */
router.get('/', icecream_controllers.icecream_view_all_Page );
module.exports = router;
