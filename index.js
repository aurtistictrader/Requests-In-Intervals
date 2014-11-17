var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Evil phantom!')
})

var page = require('webpage').create(),
    server = 'http://remind-me-yo.herokuapp.com/ghettoping';

page.open(server, 'get', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to get!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});

app.listen(app.get('port'), function() {
  console.log("Evil phantom is running at:" + app.get('port'))
})