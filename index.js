var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var text = '<h1>Hello World! I am running on heroku. <a href="barisFBTest://auth/#state=123456789">Click here for barisFBTest</a><br /><a href="beanrealm123://auth/#state=123456789">Click here for beanrealm123</a><br /><a href="bean-realm.pro.nl-be://auth/#state=123456789">Click here for bean-realm.pro.nl-be</a></h1>';
  var headers = JSON.stringify(request.headers);
  text += "<h2>request headers</h2><div>" + headers + "</div>";  
  headers = JSON.stringify(response.headers);
  text += "<h2>response headers</h2><div>" + headers + "</div>";  
  
  var text2 = '<a href="bean-realm.pro.nl-be://auth/#state=123456789"><img src="https://s3.eu-central-1.amazonaws.com/barisbucket/images/login.jpg" width="800px" /></a>';
  response.send(text2);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
