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
router.get('/galeria', function (req, res, next) {
  res.render('galeria', { title: 'contacto' });
});
router.get('/api/form', function (req, res, next) {
  let nombre = req.body.name;
  let email = req.body.email;
  res.render('index', {
    nombre: nombre,
    email: email,
  });
});
module.exports = router;
