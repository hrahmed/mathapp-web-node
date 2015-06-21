var express = require('express');
var router = express.Router();

var simplmath = require('./simplemath');
var complexmath = require('./complexmath');
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

  config.getProperties(function(configObj){
    
      // asynch function call
      simplmath.process(operation, value1, value2, configObj, function (result){
              console.log("*** in callback for add result is: ");
              res.render('simplemath', {title: 'Simple Math', operation: operation, value1: value1, value2: value2, result: result});
          });
    });
});

/* Get complex page */
router.post('/complexmath', function(req, res) {
    // Get our form values. These rely on the "name" attributes
    var operation = req.body.operation;
    var value = req.body.value;


    console.log("*** [mathapp.js] operation = " + operation);

    // get properties for host and port
    config.getProperties(function(configObj){
        console.log("***host2 is: " + configObj.host);
        console.log("***port2 is: " + configObj.port);

        //// asynch function call
        //    complexmath.median(function (result){
        //        console.log("*** in callback for median result is: ");
        //        //res.render('simplemath', {title: 'Simple Math', operation: operation, value1: value1, value2: value2, result: result});
        //    });

        // need to use case syntax or find out how to use operation value
        if (operation == "mean") {
            complexmath.mean(operation, value, configObj, function (result){
                console.log("*** [mathapp.js]  in callback for mean");
                console.log("*** [mathapp.js] Result is: " + result);
                //res.render('simplemath', {title: 'Simple Math', operation: operation, value1: value1, value2: value2, result: result});
            });

        } else if (operation == "median") {
            complexmath.median(operation, value, configObj, function (result){
                console.log("*** [mathapp.js] in callback for median");
                console.log("*** [mathapp.js] Result is: " + result);
            });

        } else if (operation == "mode") {
            complexmath.mode(operation, value, configObj, function (result){
                console.log("*** [mathapp.js] in callback for mode");
                console.log("*** [mathapp.js] Result is: " + result);
            });

        } else {
            console.log("[mathapp.js] Function " + operation + " is not supported");
        };
    });
});

module.exports = router;
