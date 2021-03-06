const express = require("express");
const db = require("./models");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
const run = async () => {

}; 

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to student tutorial app service." });
});

// db config
db.sequelize.sync();
 // drop existing table
 db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}); 


require("./config/routes.js")(app);

// set port, listen for requests
const PORT = 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


