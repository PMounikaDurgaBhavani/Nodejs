"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const upper_case_1 = __importDefault(require("upper-case"));
http_1.default.createServer((req, res) => {
    res.write(upper_case_1.default.upperCase("Hello world!"));
    res.end();
}).listen(8080);
