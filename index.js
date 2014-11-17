var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  
	setInterval(timed, 10000);
})


function timed() {
var phantom = require('phantom');
	phantom.create(function (ph) {
	  ph.createPage(function (page) {
	    page.open("http://remind-me-yo.herokuapp.com/ghettoping", function (status) {
	      console.log("opened site? ", status);
	      page.evaluate(function () { return document.title; }, function (result) {
	        console.log('Page title is ' + result);
	        ph.exit();
	      });
	    });
	  });
	});
}


