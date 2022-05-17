const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 8090,
		dbURL: "mongodb+srv://John27:Test123@cluster1.nymha.mongodb.net/Pixar1",
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];
