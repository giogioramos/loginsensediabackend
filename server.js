const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes")(app, {});

app.listen(port, () => {
  console.log("listening to port " + port);
});
