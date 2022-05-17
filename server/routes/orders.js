const orders = require("../controllers/orders");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", orders.get);

router.post("/", auth(), orders.post);

router.put("/:id", auth(), orders.put);

router.delete("/:id", auth(), orders.delete);

module.exports = router;
