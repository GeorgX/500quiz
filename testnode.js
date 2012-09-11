var https = require("https");

https.get({
    host: "api.500px.com",
    path: "/v1/photos?feature=popular&consumer_key=0Cjz9Rp5NCcqyT2xuuOQWgyYSIQDBiVvWwMo9I5a"
}, function (res) {
    var pageData = "";
    res.on('data', function (chunk) {
      pageData += chunk;
    });
    res.on('end', function(){
        console.log(pageData);
    });
});