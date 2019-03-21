var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/sendmail', function (de, para, asunto,texto) {
 
 

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'youremail@address.com',
             pass: 'yourpassword'
         }
     });

    // setup email data with unicode symbols
    let mailOptions = {
      from: de, // sender address
      to: para, // list of receivers
      subject: asunto, // Subject line
      text: texto, // plain text body
      html: ""+texto+"" // html body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  res.status(200);
  res.status(400);
});

module.exports = router;
