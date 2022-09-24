const mongoose  = require('mongoose');


const TransactionSchema = new mongoose.Schema({
   
   user_Id:{
    type: String,
        require: true
   },
   name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    phonenumber: {
        type: Number,
        require: true
    },
    transaction_type: {
        type: String,
        require: true
    },
    mode_of_payment: {
        type: String,
        require: true
    },
    currency: {
        type: String,
        require: true
    },
    transaction_amount: {
        type: Number,
        require: true
    },
    source_of_fund: {
        type: String,
        require: true
    },
    employ_id: {
        type: String,
        require: true
    },

    
    
    
    
},
{
    timestamps: true
});

module.exports =mongoose.model('Transaction', TransactionSchema);


  // name: {
  //       type: String,
  //       require: true
  //   },
  //   location: {
  //       type: String,
  //       require: true
  //   },
  //   phonenumber: {
  //       type: Number,
  //       require: true
  //   },