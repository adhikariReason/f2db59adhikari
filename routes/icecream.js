var express = require('express');
const icecream_controllers= require('../controllers/icecream');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};

/* GET icecream */
router.get('/', icecream_controllers.icecream_view_all_Page );

/* GET detail icecream page */
router.get('/detail', icecream_controllers.icecream_view_one_Page);

/* GET create icecream page */
router.get('/create',secured, icecream_controllers.icecream_create_Page);

/* GET create update page */
router.get('/update',secured, icecream_controllers.icecream_update_Page);

/* GET delete icecream page */
router.get('/delete',secured, icecream_controllers.icecream_delete_Page);

router.get('/register', function(req, res) {
	res.render('register', { title: 'Icecream App Registration'});
   });

module.exports = router;
