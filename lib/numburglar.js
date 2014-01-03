var http = require('http');
module.exports = {
    test: function() {

        http.get("http://www.google.com/index.html", function(res) {
            console.log("Got response: " + res.statusCode);
            console.log(res);
        }).on('error', function(e) {
        console.log("Got error: " + e.message);
        });
    }
};
