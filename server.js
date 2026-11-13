const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
// Test secret for Task 3
const FAKE_SECRET = "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

app.use(express.json());

// Endpoint 1: Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the DevSecOps Pipeline API!" });
});

// Endpoint 2: Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date() });
});

// Export app for testing purposes
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
