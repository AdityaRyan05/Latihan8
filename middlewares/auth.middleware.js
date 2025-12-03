exports.authBearer = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).send({ message: "Token required" });
    }

    // Format header: "Bearer 12345TOKENRAHASIA"
    const token = authHeader.split(" ")[1];

    if (token !== "12345TOKENRAHASIA") {
        return res.status(403).send({ message: "Invalid token" });
    }

    next();
};
