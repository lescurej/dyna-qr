import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

// API routes
app.get("/api", (req, res) => {
  res.send("Hello from server!");
});

app.get("/favicon.ico", (req, res) => {
  res.status(204); // No Content
});

// Handle all other routes by sending the React app's index.html
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "client", "build", "index.html")
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
