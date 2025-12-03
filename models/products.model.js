const db = require("./db.config");

// GET ALL
exports.getAll = (result) => {
    db.query("SELECT * FROM products", (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

// GET BY ID
exports.getById = (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", id, (err, res) => {
        if (err) return result(err, null);
        result(null, res[0]);
    });
};

// CREATE
exports.create = (data, result) => {
    db.query("INSERT INTO products SET ?", data, (err, res) => {
        if (err) return result(err, null);
        result(null, res.insertId);
    });
};

// UPDATE
exports.update = (id, data, result) => {
    db.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

// DELETE
exports.delete = (id, result) => {
    db.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};
