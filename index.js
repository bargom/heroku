var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('<h1>Hello World! I am running on heroku. <a href="barisFBTest://auth/#state=123456789">Click here for barisFBTest</a><br /><a href="beanrealm123://auth/#state=123456789">Click here for beanrealm123</a><a href="bean-realm.pro.nl-be://auth/#state=123456789">Click here for bean-realm.pro.nl-be</a></h1>');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
