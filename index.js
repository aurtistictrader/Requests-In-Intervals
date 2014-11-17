var express = require('express')
var app = express();
var request = require('request');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
	setInterval(timed, 10000)
})

function timed() {
	request('http://remind-me-yo.herokuapp.com/ghettoping', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log('pinged') // Print the google web page.
	  }
	})
}