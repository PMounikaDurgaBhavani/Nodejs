"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
let adrr = "https://www.youtube.com/watch?v=MY2Vxtfn5Tw";
let q = url_1.default.parse(adrr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);
console.log(q.search);
console.log(q.path);
