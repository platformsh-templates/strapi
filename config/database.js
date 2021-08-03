const config = require("platformsh-config").config();

// Uncomment the line below if you would like to use a Postgres Database
// let dbRelationshipPostgres = "postgresdatabase";

// Uncomment the line below if you would like to use a MongoDB Database
let dbRelationshipMongo = "mongodatabase";

// Uncomment the line below if you would like to use a MySQL Database
// let dbRelationshipMySql = "dbmysql"

// Strapi default sqlite settings.
let settings = {
  client: "sqlite",
  filename: process.env.DATABASE_FILENAME || ".tmp/data.db",
};

let options = {
  useNullAsDefault: true,
};

if (config.isValidPlatform() && !config.inBuild()) {
  // Platform.sh database configuration.
  const credentials = config.credentials(dbRelationshipMongo);

  console.log(
    `Using Platform.sh configuration with relationship ${dbRelationshipMongo}.`
  );

  var mongoSettings = {
    client: "mongo",
    name: credentials.service,
    host: credentials.ip,
    port: credentials.port,
    database: credentials.path,
    username: credentials.username,
    password: credentials.password,
  };

  var mongoOptions = {
    ssl: false,
    authenticationDatabase: dbRelationshipMongo,
    // debug: false,
    // acquireConnectionTimeout: 100000,
    // pool: {
    //   min: 0,
    //   max: 10,
    //   createTimeoutMillis: 30000,
    //   acquireTimeoutMillis: 600000,
    //   idleTimeoutMillis: 20000,
    //   reapIntervalMillis: 20000,
    //   createRetryIntervalMillis: 200,
    // },
  };
} else {
  if (config.isValidPlatform()) {
    // Build hook configuration message.
    console.log(
      "Using default configuration during Platform.sh build hook until relationships are available."
    );
  } else {
    // Strapi default local configuration.
    console.log(
      "Not in a Platform.sh Environment. Using default local sqlite configuration."
    );
  }
}

module.exports = {
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: settings,
      options: options,
    },
    mongodb: {
      connector: "mongoose",
      settings: mongoSettings,
      options: mongoOptions,
    },
  },
};
