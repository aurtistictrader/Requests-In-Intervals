var express = require('express')
var app = express();
var assert=require('assert');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
	setInterval(timesd, 10000)

})


function timesd() {
var phantom = require('phantom')
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

function timed() {
var phantom=require('node-phantom');
	phantom.create(function(error,ph){
		assert.ifError(error);
		ph.createPage(function(err,page){
			assert.ifError(err);
			page.open('http://localhost:5000',function(err,status){
				assert.ifError(err);
				assert.equal(status,'success');
				ph.exit();
				done();
			});
		});
	});
}


// describe('Phantom Page',function(){
// 	this.timeout(5000);
// 	it('should be able to open',function(done){
// 		phantom.create(function(error,ph){
// 			assert.ifError(error);
// 			ph.createPage(function(err,page){
// 				assert.ifError(err);
// 				page.open('http://localhost:'+server.address().port,function(err,status){
// 					assert.ifError(err);
// 					assert.equal(status,'success');
// 					server.close();
// 					ph.exit();
// 					done();
// 				});
// 			});
// 		});
// 	});
// });