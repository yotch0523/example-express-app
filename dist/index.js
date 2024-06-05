"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import necessary library to setup express server
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// create api endpoint returns "Hello, world" with GET METHOD
app.get('/', (req, res) => {
    res.send('Hello, world');
});
// setup server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
