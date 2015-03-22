/**
 * Created by ahmha02 on 15-01-30.
 */


// mathapp configuration file synch
//var fs = require('fs');
//var data = fs.readFileSync('./config.json'), myObj;
    
// mathapp configuration file asynch
var fs = require('fs');
var obj;
fs.readFile('./config.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
});

module.exports = {
    getProperties: function () {

        console.log("*** in getProprties function");
        console.log("*** host is: " + obj.host);
    }
};