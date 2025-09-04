const express = require("express");
const bodyParser = require("body-parser");
const swapiRoutes = require("./routes/swapiRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const jwt = require("jsonwebtoken");
const { authenticateJWT, SECRET } = require("./middlewareJWT");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint de login para gerar token JWT
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const user = { username };
    const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(400).json({ message: "Usuário e senha obrigatórios." });
  }
});

// Swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas protegidas por JWT
app.use("/api", authenticateJWT, swapiRoutes());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs: http://localhost:${PORT}/api/docs`);
});
