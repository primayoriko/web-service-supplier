function getConfig() {
	let config = {
		"synchronize": true,
		"logging": false,
		"entities": [
			"src/entity/**/*.ts"
		],
		"seeds": [
			'src/seed/**/*{.ts,.js}'
		],
		"cli": {
			"entitiesDir": "src/entity",
			"migrationsDir": "src/migration",
			"subscribersDir": "src/subscriber"
		}
	}
	return {
		type: "mongodb",
		host: "localhost",
		port: 27017,
		database: "ws_service",
		insecureAuth : true,
		...config
	}
}

module.exports = getConfig();