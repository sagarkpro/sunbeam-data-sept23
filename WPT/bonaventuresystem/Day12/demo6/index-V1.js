const express = require('express');

// console.log(express);

const app = express();

app.get("/emps", (request, response)=>{
    response.setHeader("Content-Type","text/plain")
    response.write("select * from emps output");
    response.end();
})

app.post("/emps", (request, response)=>{
    response.setHeader("Content-Type","text/plain")
    response.write("insert into emps output");
    response.end();
})

app.put("/emps", (request, response)=>{
    response.setHeader("Content-Type","text/plain")
    response.write("update emps output");
    response.end();
})

app.delete("/emps", (request, response)=>{
    response.setHeader("Content-Type","text/plain")
    response.write("delete from emps output");
    response.end();
})

app.get("/admin", (request, response)=>{
    response.setHeader("Content-Type","text/plain")
    response.write("select * from admin output");
    response.end();
})

app.listen(9999, ()=>{console.log("server started")})