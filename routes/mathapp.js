var express = require('express');
var router = express.Router();

var simplmath = require('./simplemath');
var config = require('./config');



/* GET home page. */
router.get('/', function(req, res) {
  console.log("*** in mathapp.js to render mathapp");
  res.render('mathapp', { title: 'MathApp' });
});

/* GET simple page. */
router.post('/simplemath', function(req, res) {
  // Get our form values. These rely on the "name" attributes
  var operation = req.body.operation;
  var value1 = req.body.value1;
  var value2 = req.body.value2;
  //config.getProperties();

  config.getProperties(function(configObj){
      console.log("***host is: " + configObj.host);
      console.log("***port is: " + configObj.port);
    
      // asynch function call
      simplmath.add(operation, value1, value2, configObj, function (result){
              console.log("*** in callback for add result is: ");
              res.render('simplemath', {title: 'Simple Math', operation: operation, value1: value1, value2: value2, result: result});
          });
    });
});

/* Get complex page */
/*router.post('/complexmath', function(req, res) {
    // Get our form values. These rely on the "name" attributes
    var operation = req.body.operation;
    var value1 = req.body.value1;
    var value2 = req.body.value2;
    config.getProperties();

    // asynch function call
    simplmath.add(operation, value1, value2, function (result){
            console.log("*** in callback for add result is: ");
            res.render('simplemath', {title: 'Simple Math', operation: operation, value1: value1, value2: value2, result: result});
        }
    );
});*/

module.exports = router;
