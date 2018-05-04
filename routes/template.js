var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/*', function(req, res, next) {
  const clientURL = req.params[0];
  console.log(`Log ---> ClientURL: ${clientURL}`);
  res.json({
    url: 'http://35.224.16.202:4503/content/AcademySports/en_US/homepage.html'
  });
});

module.exports = router;
