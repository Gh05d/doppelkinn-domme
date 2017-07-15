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
    pageTitle: 'Doppelkinn-Domme',
    dommeSays: () => {
      var einleitung = [
        'Sorry Jungs',
        'Tut mir leid Mädels',
        'Oops',
        'Oh...',
        'Ach je',
        'Sorry, hab die Nachricht jetzt erst gelesen',
        'Sorry Jungs, kann heute nicht'
      ];

      var entschuldigung = [
        'Ich hab völlig verpennt',
        'Ich hab verschwitzt',
        'Mir ist entfallen',
        'Ich hab nicht bedacht',
        'Ich hab völlig vergessen',
        'Mir war nicht klar'
      ];

      var ausrede = [
        'Desi\'s Hamster gestorben ist',
        "Desi\'s Kaninchen gestorben ist",
        'Desi\'s Meerschweinchen gestorben ist',
        'Ich morgen Fotoshooting mit der Family hab',
        'eine meiner 5.000 Nichten morgen getauft wird',
        'meine Oma zum fünften mal in diesem Jahr gestorben ist',
        'Morgen Heilige drei Könige ist und wir das immer feiern',
        'mein Auto keinen Sprit mehr hat',
        'mein Auto nicht angesprungen ist',
        'mein Vater mir mein Auto nicht gegeben hat',
        'morgen der Jahrestag von Desi\'s totem Hamster ist',
        'morgen der Jahrestag von Desi\'s totem Kaninchen ist',
        'morgen der Jahrestag von Desi\'s totem Meerschweinchen ist',
        'Ich meine Tage habe',
        'dass ich mir beim Anstehen vor der Disco die Bänder gerissen hab',
        'Ich dein Handy meinem Neffen geschenkt habe',
        'heut gar keine Postkutsche mehr fährt. Das ist jetzt blöd',
        'Ich mir den Urlaub ja doch gar nicht leisten kann. Gut, dass mir das einen Tag vor Abreise noch eingefallen ist'
      ];

      var vertroestung = [
        'Aber das nächste mal bin ich auf jeden Fall am Start',
        'Aber wir sehen uns ja nächste Woche',
        'Aber das passiert sicher nicht nochmal',
        'Sorry, das konnte ich aber echt vorher nicht wissen',
        'Sorry, aber dafür kann ich wirklich nichts',
        'Nächstes mal bin ich auf jeden Fall dabei',
        'Jetzt ist es leider zu spät'
      ];

      let eins = einleitung[Math.floor(Math.random() * einleitung.length)];
      let zwei = entschuldigung[Math.floor(Math.random() * entschuldigung.length)];
      let drei = ausrede[Math.floor(Math.random() * ausrede.length)];
      let vier = vertroestung[Math.floor(Math.random() * vertroestung.length)];

      var schwachsinn = `${eins}, ${zwei}, dass ${drei}.
                        ${vier}!`

      return schwachsinn;
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
