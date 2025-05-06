import http from 'http';

const myServer=http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
});

myServer.listen(8080);