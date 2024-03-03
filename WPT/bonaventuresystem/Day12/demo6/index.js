const express = require('express');
const mysql = require('mysql');

const app = express();

const connectionDetails = {
                            host: "localhost",
                            database: "dac",
                            user : "root",
                            password: "manager"
                          }

app.use((request, response, next)=>{
    response.write("ABC");
    next();
})


app.use((request, response, next)=>{
    response.write("PQR");
    next();
})

app.use((request, response, next)=>{
    response.write("XYZ");
    response.end();
})

app.get("/emps", (request, response)=>{
    var connection = 
        mysql.createConnection(connectionDetails);

    var statement = `select * from Emp`;

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(result));
         connection.end();
         response.end();
        }
        else
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(error));
         connection.end();
         response.end();
        }
    });
})

app.post("/emps", (request, response)=>{
    var connection = 
        mysql.createConnection(connectionDetails);

    var No = 6;
    var Name = "shailesh";
    var Address = "pune";     
    
    var statement = `insert into Emp values(${No},'${Name}', '${Address}')`;

    console.log(statement);

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(result));
         connection.end();
         response.end();
        }
        else
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(error));
         connection.end();
         response.end();
        }
    });
})

app.put("/emps", (request, response)=>{
    var connection = 
        mysql.createConnection(connectionDetails);

    var No = 6;
    var Name = "yogesh";
    var Address = "kolkata";     
    
    var statement = `update Emp set Name = '${Name}', Address= '${Address}' where No = ${No}`;

    console.log(statement);

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(result));
         connection.end();
         response.end();
        }
        else
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(error));
         connection.end();
         response.end();
        }
    });
})

app.delete("/emps", (request, response)=>{
    var connection = 
        mysql.createConnection(connectionDetails);

    var No = 6;

    var statement = `delete from Emp where No = ${No}`;

    console.log(statement);

    connection.query(statement, (error, result)=>{
        if(error==null)
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(result));
         connection.end();
         response.end();
        }
        else
        {
         response.setHeader("Content-Type",
                            "application/json")
         response.write(JSON.stringify(error));
         connection.end();
         response.end();
        }
    });
})

app.get("/admin", (request, response)=>{
    response.setHeader("Content-Type","text/plain")
    response.write("select * from admin output");
    response.end();
})

app.listen(9999, ()=>{console.log("server started")})