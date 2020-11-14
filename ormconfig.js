function getConfig() {
	let config = {
		"synchronize": true,
		"logging": false,
		"entities": [
			"src/entity/*.ts"
		],
		"migrations": [
			"src/migration/*.ts"
		],
		"subscribers": [
			"src/subscriber/*.ts"
		],
		"seeds": [
			'src/seed/*{.ts,.js}'
		],
		"factories": [
			'src/factory/*{.ts,.js}'
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
	// return {
	// 	"type": "mysql",
	// 	"host": "localhost",
	// 	"port": 3306,
	// 	"username": "root",
	// 	"password": "root",
	// 	"database": "ws_service",
	// 	"insecureAuth" : true,
	// 	...config
  	// }
}

module.exports = getConfig();