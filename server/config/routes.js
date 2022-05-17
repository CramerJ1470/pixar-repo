const router = require("../routes");

module.exports = (app) => {
	app.use("/api/user", router.user);

	app.use("/api/character", router.character);

	app.use("/api/movie", router.movie);

	app.use("/api/carts", router.carts);

	app.use("/api/orders", router.orders);

	app.use("*", (req, res, next) => {
		console.log(req.url);
		res.status(500).json({ error: "Route not matching" });
	});
};
