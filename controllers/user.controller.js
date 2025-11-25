const User = require("../models/user.model");

// =============================
// GET ALL
// =============================
exports.getAllUsers = (req, res) => {
    User.getAll((err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
    });
};

// =============================
// GET BY ID
// =============================
exports.getUserById = (req, res) => {
    User.getById(req.params.id, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
    });
};

// =============================
// CREATE
// =============================
exports.createUser = (req, res) => {
    User.create(req.body, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send({
            status: "success",
            message: "User berhasil ditambahkan",
            id: data
        });
    });
};

// =============================
// UPDATE
// =============================
exports.updateUser = (req, res) => {
    User.update(req.params.id, req.body, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send("User berhasil diupdate");
    });
};

// =============================
// DELETE
// =============================
exports.deleteUser = (req, res) => {
    User.delete(req.params.id, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send("User berhasil dihapus");
    });
};
