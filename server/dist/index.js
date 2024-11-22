"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Serve static files from the React build folder
app.use(express_1.default.static(path_1.default.join(__dirname, "client", "build")));
// API routes
app.get("/api", (req, res) => {
    res.send("Hello from server!");
});
app.get("/favicon.ico", (req, res) => {
    res.status(204); // No Content
});
// Handle all other routes by sending the React app's index.html
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
