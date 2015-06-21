/**
 * Created by ahmha02 on 15-06-16.
 */

// Rest client
var Client = require('node-rest-client').Client;
client = new Client();

module.exports = {
    mean: function (operation, values, configObj, callback) {
        console.log("*** [complexmath.js] in mean function");
        var url = "http://" + configObj.host +":" + configObj.port +"/MathProxy/rest/hello/mathcomplex?operation=" + operation +
            "&values=" + values;
        console.log(url);
        // make rest call to complex math
        client.get(url, function(data, response){
            callback(data);
        });
    },
    median: function (operation, values, configObj, callback) {
        console.log("*** [complexmath.js] in median function");
        var url = "http://" + configObj.host +":" + configObj.port +"/MathProxy/rest/hello/mathcomplex?operation=" + operation +
            "&values=" + values;
        console.log(url);
        // make rest call to complex math
        client.get(url, function(data, response){
            callback(data);
        });
    },
    mode: function (operation, values, configObj, callback) {
        console.log("*** [complexmath.js] in mode function");
        var url = "http://" + configObj.host +":" + configObj.port +"/MathProxy/rest/hello/mathcomplex?operation=" + operation +
            "&values=" + values;
        console.log(url);
        // make rest call to complex math
        client.get(url, function(data, response){
            callback(data);
        });
    }
};