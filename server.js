const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
// Needed to deploy the app to heroku. Uses localhost 3000 in machine.
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  // Create the log file.
  console.log(log);
  fs.appendFile('server.log', log + '\n', err => {
    if(err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('getTime', () => {
  let hours = new Date().getHours();
  let gmin = new Date().getMinutes();
  let minutes = (gmin < 10 ? '0' : '') + gmin;

  return `${hours}:${minutes}`;
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Doppelkinn-Domme'
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
