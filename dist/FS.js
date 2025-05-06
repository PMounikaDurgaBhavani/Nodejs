"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs = __importStar(require("fs"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    // fs.readFile("demo.txt","utf-8",(err,data)=>{
    //     if(err){
    //         res.write(err);
    //     }
    //     else{
    //         res.end(data);
    //     }
    // });
    fs.appendFile("demo.txt", "\n Thank you!", (err) => {
        if (err) {
            res.write(err);
        }
        else {
            res.end("Content added successfully");
        }
    });
    // fs.writeFile("example.txt","utf-8",(err)=>{
    //     if(err){
    //         res.write(err);
    //     }else{
    //         res.end("File Created Successfully");
    //     }
    // });
    // fs.writeFile("example.txt","This file is used to write examples",(err)=>{
    //     if(err){
    //         res.write(err);
    //     }else{
    //         res.end("file content is success");
    //     }
    // });
    // fs.rename("example.txt","sample.txt",(err)=>{
    //     if(err){
    //         res.write(err);
    //     }else{
    //         res.end("File name is changed successfully");
    //     }
    // })
    // fs.unlink("sample.txt",(err)=>{
    //     if(err){
    //         res.write(err);
    //     }else{
    //         res.end("File deleted successfully");
    //     }
    // })
});
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
