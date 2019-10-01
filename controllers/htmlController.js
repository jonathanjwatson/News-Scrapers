let express = require("express");

let router = express.Router();

router.get("/", function(req, res) {
  res.render("article");
});

router.get("/note", function(req, res) {
  res.render("note");
});

module.exports = router;