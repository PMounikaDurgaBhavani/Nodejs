import http from 'http';
import * as fs from 'fs';
const PORT=3000;
const server=http.createServer((req,res)=>{
    // fs.readFile("demo.txt","utf-8",(err,data)=>{
    //     if(err){
    //         res.write(err);
    //     }
    //     else{
    //         res.write(data);
    //     }
    // });
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
    fs.unlink("sample.txt",(err)=>{
        if(err){
            res.write(err);
        }else{
            res.end("File deleted successfully");
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
