var express = require('express');
var router = express.Router();
var transactionController = require('../controller/transcationController')

/* GET users listing. */

// router.get('/', usersController.listUsers);

router.post("/",transactionController.createTransaction);
// router.post("/userlogin",usersController.loginUser);
// router.post("/userform",usersController.userformController );

module.exports = router;
