module.exports = {
	apiHost: 'http://localhost:8325',
	host: 'http://localhost:4000',
	apiBase: '/api/v1',
	apiPort: 8325,
	frontendPort: 4000,
	development: {
		"url": "postgres://bioxyxgm:gTllpOBZY0ICrs95mvcFk7zvBiKtm7bq@baasu.db.elephantsql.com:5432/bioxyxgm",
		"dialect": "postgres",
	},
	test: {
		"username": "laynefaler",
		"password": null,
		"database": "ssjs-chat",
		"host": "127.0.0.1",
		"port": 5432,
		"dialect": "postgres",
	},
	production: {
		url: "postgresql://yourDBAdmin:YourSecret@demo-database.csy0a8lionis.us-west-2.rds.amazonaws.com:5432/RENS",
		dialect: "postgres",
	},
	webSecret: 'shhhh',
	redis: 'redis://localhost:6381',
	appRoot: __dirname,
};
