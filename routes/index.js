var express = require('express');
var router = express.Router();
const _ = require("underscore");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/test", (req, res) => {
  console.log("this is test log");
  const ary1 = [1,2,3]
  const ary2 = [4,5,6]
  const ary3 = _.zip(ary1, ary2);
  res.status(200).json({
    msg: "hihihi",
    ary3: ary3
  })
})

module.exports = router;
