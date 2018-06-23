const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;
const app = express();



// Serve up static assets
app.use(express.static("app/public"));
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


// Use Controllers
require("./controllers/api_controller.js")(app);



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});