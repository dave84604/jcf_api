var express = require('express');
var router = express.Router();
var format = require('date-fns/format')

var msgData = 
[
  {
    id:0,
    from:"Dave",
    to:"John",
    tstamp:format(new Date(2020, 0, 1), "yyyy-MM-dd'T'HH:mm:ss")
   },
  {
    id:1,
    from:"John",
    to:"Barbera",
    tstamp:format(new Date(2020, 2, 9), "yyyy-MM-dd'T'HH:mm:ss")
  },
  {
    id:2,
    from:"Carol",
    to:"Sharon",
    tstamp:format(new Date(2020, 2, 16), "yyyy-MM-dd'T'HH:mm:ss")
  }
]

/* GET all messages */
router.get('/', function(req, res, next) {
  res.json(msgData);
});


/* GET a message */
router.get('/filter/id/:msgid', function(req, res, next) {
  console.log(req.params);
  res.json(msgData[req.params.msgid]);
});

router.get('/filter/from/:from', function(req, res, next) {
  console.log(req.params);
  res.json(msgData.filter(msg => msg.from.toLowerCase() == req.params.from.toLowerCase()));
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json( {id:4} );
});


module.exports = router;
