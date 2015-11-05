var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  var userName = req.body.name;

  var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
          /* ====== ENTER YOUR EMAIL DETAILS HERE ====== */
           user: 'example@gmail.com',
           pass: 'password'
       }
   });

   var msg = req.body.name + "\n Message: " + req.body.message;
   var mailOptions = {
    from: req.body.email,       // sender address
    to: 'example@gmail.com', // list of receivers
    subject: req.body.subject,  // Subject line
    text: msg
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.render('index', {title: 'Express', successmsg: "Email Failed to Send!"});
    }else{
        console.log('Message sent: ' + info.response);
        res.render('index', {title: 'Express', successmsg: "Email Successfuly Sent!"});
    };
});

});

module.exports = router;
