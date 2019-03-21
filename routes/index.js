var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contacto', function (req, res, next) {
  res.render('contacto', { title: 'contacto' });
});

module.exports = router;
