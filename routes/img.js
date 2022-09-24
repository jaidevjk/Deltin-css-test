var express = require('express');
var router = express.Router();
var imgesController = require('../controller/imagesController')

/* GET users listing. */

router.get('/', imgesController.getUser);

router.post("/",imgesController.CreateUser);
router.post("/userform",imgesController.userformController );

module.exports = router;
