const express = require('express');
const app = express();
const path = require('path');

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/app'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

app.use(forceSSL());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});
