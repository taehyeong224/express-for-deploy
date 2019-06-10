var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", (req, res) => {
  console.log("this is test log");
  res.status(200).json({
    msg: "hihihi"
  })
})

module.exports = router;
