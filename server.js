const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Needed to deploy the app to heroku. Uses localhost 3000 in machine.
const PORT = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  // Create the log file.

  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log");
    }
  });
  next();
});

app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

hbs.registerHelper("getTime", () => {
  let hours = new Date().getHours();
  let gmin = new Date().getMinutes();
  let minutes = (gmin < 10 ? "0" : "") + gmin;

  return `${hours}:${minutes}`;
});

app.get("/", (_req, res) => {
  res.render("home.hbs", {
    pageTitle: "Doppelkinn-Domme"
  });
});

app.get("/neue-ausrede", (req, res) => {
  [from, message] = req.url.split("?")[1].split("&");

  const msg = {
    to: "pc@vipfy.store",
    from,
    subject: "Neue Ausrede für den Generator",
    text: decodeURIComponent(message)
  };

  sgMail.send(msg);
  res.render("home.hbs", {
    pageTitle: "Doppelkinn-Domme"
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
