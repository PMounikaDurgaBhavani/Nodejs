import http from 'http';
import os from 'os';
import path from 'path';

const PORT = 3000;

const server = http.createServer((req,res) => {
    res.write("OS Module \n");
    res.write(`\t OS name: ${os.type()} \n`);
    res.write(`\t OS version: ${os.version()} \n`);
    res.write(`\t OS Freemem: ${os.freemem()} \n`);
    let parse1:object[]=os.cpus();
    res.write(`\t OS details: ${JSON.stringify(parse1)} \n`);
    res.write("Path Module \n");
    res.write(`\t Directory: ${__dirname} \n`);
    res.write(`\t File Path: ${__filename} \n`);
    res.write(`\t Path: ${path.dirname(__filename)} \n`);
    res.write(`\t FileName: ${path.basename(__filename)} \n`);
    res.write(`\t Extension: ${path.extname(__filename)} \n`);
    let parseObject:string=JSON.stringify(path.parse(__filename));
    res.write(`\t Path Object: ${parseObject} \n`);
    res.end(" ")
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
