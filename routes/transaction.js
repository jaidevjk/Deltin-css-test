var express = require('express');
var router = express.Router();
var transactionController = require('../controller/transcationController')

/* GET users listing. */

 router.get('/',transactionController.listTransactions);

router.post("/",transactionController.createTransaction);

module.exports = router;
