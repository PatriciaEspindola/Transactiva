var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET my view
router.get("/my-page", function (req, res, next) {
  const myData = {
    name: "Paty",
    title: "My Personal site",
    say: "hello",
  };
  res.render("myview", { ...myData });
});
module.exports = router;

//PARA EL FORMULARIO paymentForm
router.get("/paymentForm", function (req, res, next) {
  res.render("paymentForm", {});
});
module.exports = router;
