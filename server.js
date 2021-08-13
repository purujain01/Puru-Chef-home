const express = require("express");
const session = require("express-session");
const path = require("path");
const helmet = require("helmet");
const mongoose = require("mongoose")
// const cors = require("cors");
const compression = require('compression');
require("dotenv").config();

const app = express();
const passport = require("./passport");
const routes = require("./routes");
const options=require("./config/config")
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(compression({filter:(req,res)=>{
    //such that it will compress all thing
   return compression.filter(req, res)
}}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
// app.use(cors())


app.use(helmet({
    contentSecurityPolicy: false,
  }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("admin/build"));

}
//only need on develepment
if (process.env.NODE_ENV != "production") {
  // const expressJSDocSwagger = require('express-jsdoc-swagger');
  // expressJSDocSwagger(app)(options);
}

app.use(
  session({
    name: "Chef@home",
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hrs
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
// use API routes here
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-storedb", {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify: false, 
  useCreateIndex: true
});


app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/admin/public/", "service-worker.js"));
});

// app.post("/toatlcustomers", (req,res) => {

// });
// Send every other request to the React app  
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./admin/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



