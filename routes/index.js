var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Webpack v3 Sandbox' });
});

router.get('/webpack/:view', function(req, res, next) {
  res.render('webpack/' + req.params.view, { title: req.params.view + ' | webpack' });
});


module.exports = router;

