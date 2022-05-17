const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");
const carts = require("../controllers/carts");

router.get("/", carts.get);

router.post("/", auth(), carts.post);

router.put("/:id", auth(), carts.put);

router.delete("/", auth(), carts.delete);

module.exports = router;
