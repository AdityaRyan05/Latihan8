const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",      // kalau kamu ubah password MySQL, sesuaikan di sini
    password: "",
    database: "dbpraktikum8"
});

connection.connect(err => {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;
