const express = require("express");
const mustExp = require("mustache-express");

const app = express();
const mustache = mustExp();
mustache.cache = null;
app.engine("mustache", mustache);
app.set("view engine", "mustache");

app.use(express.static("public"));

app.get("/meds", (req, res) => {
  res.render("meds");
});

app.listen(5555, () => {
  console.log("Listning to 5555");
});
