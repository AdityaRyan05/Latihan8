const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const { email, password } = req.body;

    // TEMPORARY (tanpa database dulu)
    const dummyEmail = "admin@mail.com";
    const dummyPassword = "123456";

    if (email !== dummyEmail || password !== dummyPassword) {
        return res.status(401).send({ message: "Email atau password salah" });
    }

    const token = jwt.sign(
        { email: email },
        "SECRETKEY",
        { expiresIn: "1h" }
    );

    res.send({
        message: "Login sukses",
        token: token
    });
};
