const port = 3000;
const mongourl = "mongodb://localhost:27017/login";
const tableName = "users";
const salt = 06;

module.exports.port = port;
module.exports.mongourl = mongourl;
module.exports.tableName = tableName;
module.exports.salt = salt;