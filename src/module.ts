import {add,subtract,multiply,divide} from "./demomodule";
import http from 'http';
const PORT=3000;
const myServer=http.createServer((req,res)=>{
    res.write(`Addition: ${add(10,20)} \n`);
    res.write(`Subtraction: ${subtract(100,10)} \n`);
    res.write(`Multiplication: ${multiply(9,9)} \n`);
    res.write(`Division: ${divide(20,2)}\n`);
    res.end();
});

myServer.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});