const express = require('express');
const router = express.Router();
const path = require('path');

//Course Model
const User = require('../models/users');

exports.createUser = (req,res) => {
    const newUser = new User({
        name: req.body.name,
        phonenumber:req.body.phonenumber ,
    email:req.body.email ,
    dob:req.body.dob ,
    gender:req.body.gender ,
    occupation:req.body.occupation,
    nationality: req.body.nationality,
    address:req.body.address,
    country: req.body.country,
    state:req.body.state,
    city:req.body.city,
    pincode:req.body.pincode,
    id: req.body.id,
    id_number: req.body.id_number,
    transaction_type: req.body.transaction_type,
    mode_of_payment: req.body.mode_of_payment,
    currency: req.body.currency,
    transaction_amount: req.body.transaction_amount,
    source_of_fund: req.body.source_of_fund,
    employ_id:req.body.employ_id
        
    });
    newUser.save((error)=>{
        if(error)
        {
            res.json({status:0,debug_data:error});
        }
        else{
            res.json({status:1,data:"user created"}
                );
            console.log(res.data);
        }
    })
};

exports.listUsers = (request, response) => {
    User.find(function(err, users_list) {
        if(err){
            response.json(err);
        } else {
            response.json({status: 1, data: users_list})
        }
    });
};


exports.userformController = function(request,response){

    let completePath = path.join(__dirname+"/../user.html");
    response.sendFile(completePath);
}