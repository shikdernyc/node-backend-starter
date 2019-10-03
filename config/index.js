let envPath = __dirname.substr(0, __dirname.lastIndexOf('/')) + `/.env`;
require('dotenv').config({ path: envPath });
let env = process.env.NODE_ENV

const configs = {
  // app
  API_ROUTE: '/api',
  PORT: process.env.PORT || 8000,
  SECRET_KEY: process.env.SECRET_KEY || "ABC123",
  // database
  DATABASE: {
    URL: undefined,
    NAME: "dbname_dev",
    USER: "app_dev",
    PASSWORD: "password",
    HOST: "localhost",
    DIALECT: "postgres",
    LOGGING: console.log,
  },
  // aws
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  ITEM_IMAGE_BUCKET: "my-app-image-bucket-name"
}

// overrides
const overrides = {
  "default": {
  },
  "development": {

  },
  "test": {
    PORT: process.env.TEST_PORT || 8082,
    DATABASE: {
      ...configs.DATABASE,
      NAME: "dbname_test",
    },
  },
  "production": {
  }
}

function getConfig() {
  if (!overrides.hasOwnProperty(env)) {
    env = "default"
  }
  let config = {
    ...configs,
    ...overrides[env],
  }
  return config
}


module.exports = getConfig()