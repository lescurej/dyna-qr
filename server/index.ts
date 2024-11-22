import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, "../client/build")));

// API route example
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Serve React frontend for other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
