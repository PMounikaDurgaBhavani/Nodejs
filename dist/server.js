"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const server = http_1.default.createServer((req, res) => {
    res.write("OS Module \n");
    res.write(`\t OS name: ${os_1.default.type()} \n`);
    res.write(`\t OS version: ${os_1.default.version()} \n`);
    res.write(`\t OS Freemem: ${os_1.default.freemem()} \n`);
    let parse1 = os_1.default.cpus();
    res.write(`\t OS details: ${JSON.stringify(parse1)} \n`);
    res.write("Path Module \n");
    res.write(`\t Directory: ${__dirname} \n`);
    res.write(`\t File Path: ${__filename} \n`);
    res.write(`\t Path: ${path_1.default.dirname(__filename)} \n`);
    res.write(`\t FileName: ${path_1.default.basename(__filename)} \n`);
    res.write(`\t Extension: ${path_1.default.extname(__filename)} \n`);
    let parseObject = JSON.stringify(path_1.default.parse(__filename));
    res.write(`\t Path Object: ${parseObject} \n`);
    res.end(" ");
});
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
