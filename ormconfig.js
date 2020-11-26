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
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: "postgres",
		password: "root",
		database: "ws_supplier",
		insecureAuth : true,
		...config
	}
}

module.exports = getConfig();