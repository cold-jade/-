var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res, next) {
  res.render('news', {});
});

module.exports = router;
