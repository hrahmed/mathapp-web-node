/**
 * Created by ahmha02 on 15-01-25.
 */
    
// Rest client
var Client = require('node-rest-client').Client;
client = new Client();
var responseData  = {};

module.exports = {
    add: function (operation, value1, value2, callback) {
        console.log("*** in add function with" +
        " operation: " +
        arguments[0]);

        // Simple Math URL
        var result = client.get("http://localhost:8080/MathProxy/rest/hello/math?operation=" + arguments[0] +
                                        "&value1=" + arguments[1] + "&value2=" + arguments[2],
                                function(data, response){
                                //responseData = data;
                                //callback(responseData);
                                console.log("*** Result is: " + data.result);
                                callback(data.result);
                                }
        );
        console.log("*** Result outside is: " + result);
        //return result;
    },
    subtract: function () {
        // whatever
        console.log("*** in subtract function");

    }
};