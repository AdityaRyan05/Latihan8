const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import routes
const userRoutes = require("./routes/user.routes");

// Gunakan routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Server berjalan!");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
