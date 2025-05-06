import http from 'http';
import {upperCase} from 'upper-case';
http.createServer((req,res)=>{
    res.write(upperCase("Hello world!"));
    res.end();
}).listen(8080);