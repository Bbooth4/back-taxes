"use strict";

require('dotenv').config({ silent: true });

const PORT            = process.env.PORT || 8080;
const ENV             = process.env.ENV || "development";
const express         = require("express");
const bodyParser      = require("body-parser");
const sass            = require("node-sass-middleware");
const methodOverride  = require('method-override');
const app             = express();
const morgan          = require('morgan');
const cookieSession   = require('cookie-session');
const models          = require("./models");
const ejsLint         = require('ejs-lint');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/scss", sass({
  src: __dirname + "./scss",
  dest: __dirname + "./public/scss",
  debug: false,
  outputStyle: 'compressed'
}));

app.use(cookieSession({
  name:'session',
  keys:['key'],
  maxAge: 24 * 60 * 60 * 1000
}));

app.use(methodOverride('_method'));

app.use(express.static("public"));

models.sequelize.sync({ force: false }).then(() => {

  app.get("/", (req, res) => {
    const admin = req.session.admin;
    console.log('admin', admin)
    const object = {
      admin: admin
    }
    res.render("index", object);
  });

  app.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  app.post("/newPost", (req, res) => {
    models.post.create({
        url: req.body.url,
        title: req.body.title, 
        description: req.body.description
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.error(err);
      });
    res.redirect("/");
  });

  app.get("/posts", (req, res) => {
    models.post.findAll({ raw: true })
      .then((response) => {
        res.send(response);
      }).catch((err) => {
        console.error(err);
      });
  });

  app.post("/login", (req, res) => {
    models.admin.findAll({ raw: true })
      .then((response) => {
        console.log('session', req.session.admin);
        if (response[0].admin === req.body.admin && response[0].password === req.body.password) {
          req.session.admin = req.body.admin;
          res.status(200).redirect(`/`);
        } else {
          res.status(403).send("Incorrect login credentials!");
        }
      }).catch((err) => {
        console.error(err);
      });
  });

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });

});