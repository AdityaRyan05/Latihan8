const Product = require("../models/products.model");

// GET ALL
exports.getAllProducts = (req, res) => {
    Product.getAll((err, data) => {
        if (err) return res.status(500).send(err);
        res.send(data);
    });
};

// GET BY ID
exports.getProductById = (req, res) => {
    Product.getById(req.params.id, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send(data);
    });
};

// CREATE
exports.createProduct = (req, res) => {
    const newData = {
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,
        foto: req.body.foto
    };

    Product.create(newData, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Product created", id: data });
    });
};

// UPDATE
exports.updateProduct = (req, res) => {
    const updateData = {
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,
        foto: req.body.foto
    };

    Product.update(req.params.id, updateData, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Product updated" });
    });
};

// DELETE
exports.deleteProduct = (req, res) => {
    Product.delete(req.params.id, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Product deleted" });
    });
};
