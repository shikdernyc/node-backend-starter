// require('dotenv').config({ path: `${envPath}/.env` });
import fs from 'fs'
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var db = {};
let {
  DATABASE: {
    URL,
    NAME,
    USER,
    PASSWORD,
    DIALECT,
    LOGGING,
    HOST
  } } = require('../../config')

let sequelize;

if (URL && URL != "") {
  sequelize = new Sequelize(URL, {
    dialect: DIALECT,
    logging: LOGGING
  })
} else {
  sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    logging: LOGGING
  });
}

function createModel(path) {
  var model = sequelize["import"](path);
  db[model.name] = model;
  return model
}

function updateDBAssociations() {
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

// ================= DEFINE MODELS HERE =================
const User = createModel('./User.js')

// ======================================================
// sequelize.queryInterface.dropAllTables()

updateDBAssociations()

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ================== EXPORT MODELS HERE =================
export default db
export { User }
// =======================================================