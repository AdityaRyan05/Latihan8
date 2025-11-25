const db = require("./db.config");

const User = function(){};

// =====================================
// GET ALL USERS
// =====================================
User.getAll = result => {
    db.query("SELECT * FROM users", (err, res) => {
        if (err) result(err, null);
        else result(null, res);
    });
};

// =====================================
// GET USER BY ID
// =====================================
User.getById = (id, result) => {
    db.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
        if (err) result(err, null);
        else result(null, res[0]);
    });
};

// =====================================
// CREATE USER
// =====================================
User.create = (data, result) => {
    db.query("INSERT INTO users SET ?", data, (err, res) => {
        if (err) result(err, null);
        else result(null, res.insertId);
    });
};

// =====================================
// UPDATE USER
// =====================================
User.update = (id, data, result) => {
    db.query(
        "UPDATE users SET ? WHERE id = ?",
        [data, id],
        (err, res) => {
            if (err) result(err, null);
            else result(null, res);
        }
    );
};

// =====================================
// DELETE USER
// =====================================
User.delete = (id, result) => {
    db.query(
        "DELETE FROM users WHERE id = ?",
        id,
        (err, res) => {
            if (err) result(err, null);
            else result(null, res);
        }
    );
};

module.exports = User;
