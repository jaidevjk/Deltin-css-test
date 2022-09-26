
const bcrypt = require("bcrypt");
const Transaction = require("../models/transaction");
const jwt =require("jsonwebtoken");

// 632deb7e7072e8b1e8b4ede6
 
// const getRandomArbitrary=()=>{
//     return Math.floor(Math.random() * (200 - 100) +100)*1000;
//   }
//console.log(getRandomArbitrary())
exports.createTransaction =(req,res) => {
    
 console.log(req.body.id);
 const {transaction_amount}= req.body;
 console.log(transaction_amount);
// {transaction_amount>=200000?}
    const newTransaction = new Transaction({
        user_Id: req.body.user_Id,
        name: req.body.name,
        location:req.body.location,
        phonenumber:req.body.phonenumber,
        transaction_type: req.body.transaction_type,
        mode_of_payment: req.body.mode_of_payment,
        currency: req.body.currency,
        transaction_amount:transaction_amount >= 200000 ? Math.floor(Math.random() * (200 - 100) +100)*1000 :transaction_amount ,
        source_of_fund: req.body.source_of_fund,
        employ_id:req.body.employ_id,  
    });

    newTransaction.save((error)=>{
        if(error)
        {
            res.json({status:0,debug_data:error});
        }
        else{
            
            res.json({
                                    newTransaction: {
                                        _id:newTransaction._id,
                                        id: newTransaction.user_Id,
                                        name:newTransaction.name
                                    }
                                });
            
           
        }
    })
}


exports.listTransactions = (request, response) => {
   Transaction.find(function(err, users_list) {
        if(err){
            response.json(err);
        } else {
            // console.log("one:",users_list);
            response.json({status: 1, data: users_list});

        }
    });
};