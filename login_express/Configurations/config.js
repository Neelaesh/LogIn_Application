const port = 3000;
//const mongourl = "mongodb://localhost:27017/login";
const mongourl = "mongodb+srv://new-user_06:new-user_06@cluster0-lm0gv.mongodb.net/login?retryWrites=true&w=majority";
const tableName = "users";
const salt = 06;

module.exports.port = port;
module.exports.mongourl = mongourl;
module.exports.tableName = tableName;
module.exports.salt = salt;