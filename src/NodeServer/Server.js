import express, { logger } from "express";
import { createConnection } from "mysql";
var app = express();
app.use(logger());

var connection = createConnection({
  host: "", //Put in host name here
  user: "bc4af97fe5f893", //Put in username here: bc4af97fe5f893
  password: "e7b5398d", //Put password here: e7b5398d
  database: "", //Put database name here
});

connection.connect();

//Fix me
app.get("/", function (request, response) {
  response.send(request);
  connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
    if (err) throw err;

    response.send("The solution is: ", rows[0].solution);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});
