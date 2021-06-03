const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "wikigames",
})

connect.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Tersambung...");
  }
})

module.exports = connect;