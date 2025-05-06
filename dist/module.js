"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const demomodule_1 = require("./demomodule");
const http_1 = __importDefault(require("http"));
const PORT = 3000;
const myServer = http_1.default.createServer((req, res) => {
    res.write(`Addition: ${(0, demomodule_1.add)(10, 20)} \n`);
    res.write(`Subtraction: ${(0, demomodule_1.subtract)(100, 10)} \n`);
    res.write(`Multiplication: ${(0, demomodule_1.multiply)(9, 9)} \n`);
    res.write(`Division: ${(0, demomodule_1.divide)(20, 2)}\n`);
    res.end();
});
myServer.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
