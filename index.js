var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Evil phantom!')
})

app.listen(app.get('port'), function() {
  console.log("Evil phantom is running at:" + app.get('port'))
})

var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open("http://remind-me-yo.herokuapp.com/ghettoping", function (status) {
      page.evaluate(function () { return document.title; }, function (result) {
        console.log('Page title is ' + result);
        ph.exit();
      });
    });
  });
});
// var page = require('webpage').create(),
//     server = 'http://remind-me-yo.herokuapp.com/ghettoping';

// page.open(server, 'get', data, function (status) {
//     if (status !== 'success') {
//         console.log('Unable to get!');
//     } else {
//         console.log(page.content);
//     }
//     phantom.exit();
// });
