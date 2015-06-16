/**
 * Created by ahmha02 on 15-01-25.
 */
    
// Rest client
var Client = require('node-rest-client').Client;
client = new Client();
var responseData  = {};

module.exports = {
    add: function (operation, value1, value2,configObj, callback) {
        
        var url = "http://" + configObj.host +":" + configObj.port +"/MathProxy/rest/hello/math?operation=" + operation +
            "&value1=" + value1 + "&value2=" + value2;
        
        console.log("*** URL IS: " + url);
        
        // Simple Math URL
        var result = client.get(url, function(data, response){
                                console.log("*** Result is: " + data.result);
                                callback(data.result);
                                });
    },
    subtract: function () {
        // whatever
        console.log("*** in subtract function");

    }
};