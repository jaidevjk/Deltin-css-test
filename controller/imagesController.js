var multer = require('multer');
  var imgModel = require('../models/image');
  const express =require("express");
const router  = express.Router();
var path = require('path');
var fs = require('fs');
const DIR = '../public/images';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
         cb(null, 'uploads')
        // cb(null, DIR)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
const upload =multer({ storage: storage });

exports.getUser = (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
};

exports.CreateUser = [upload.single('image'),(req, res, next) => {
  
    var obj =new imgModel ({
            name: req.body.name,
            desc: req.body.desc,
            image: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        })

obj.save((error)=>{
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


    // imgModel.create(obj, (err, item) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         // item.save();
    //         res.redirect('/');
    //     }
    // });
}];

exports.userformController =(request,response)=>{

    let completePath = path.join(__dirname+"/../user.html");
    response.sendFile(completePath);
};




            //data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),

