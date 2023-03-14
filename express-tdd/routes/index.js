var express = require('express');
var router = express.Router();
const baseController = require('../controller/baseController')

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', baseController.hello)
router.post('/sum', baseController.sum)



module.exports = router;
