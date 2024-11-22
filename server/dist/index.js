"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve React build files
app.use(express_1.default.static(path_1.default.join(__dirname, "../client/build")));
// API route example
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from the server!" });
});
// Serve React frontend for other routes
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../client/build/index.html"));
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
