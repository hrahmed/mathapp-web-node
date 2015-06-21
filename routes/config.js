/**
 * Created by ahmha02 on 15-01-30.
 */


// mathapp configuration file synch
//var fs = require('fs');
//var data = fs.readFileSync('./config.json'), myObj;
    
// mathapp configuration file asynch
var fs = require('fs');
var obj;

module.exports = {
    getProperties: function (cb) {

        fs.readFile('./config.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            //console.log("*** host is: " + obj.host);
            //console.log("*** port is: " + obj.port);
            cb(obj);
        });

        console.log("*** in getProprties function");

    }
};