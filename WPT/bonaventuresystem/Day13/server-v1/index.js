const express = require('express');
const mysql = require('mysql');

const app = express();

const connectionDetails = {
                            host: "localhost",
                            database: "dac",
                            user : "root",
                            password: "manager"
                          }
app.use((request, response, next)=>
{
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Methods","*")
    response.setHeader("Access-Control-Allow-Headers","*")
    next();
});


// app.use((request, response, next)=>
//     {
//         //request.stream data is going to get converetd into 
//         //String -> JSON and will be assigned to request.body 

//         next();
//     });

app.use(express.json())

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

    //console.log(request.body);

    var connection = 
        mysql.createConnection(connectionDetails);

    var No = parseInt(request.body.No);
    var Name = request.body.Name;
    var Address = request.body.Address;     
    
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

app.put("/emps/:No", (request, response)=>{
    var connection = 
        mysql.createConnection(connectionDetails);

    var No = parseInt(request.params.No);
    var Name = request.body.Name;
    var Address = request.body.Address;     
    
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

app.delete("/emps/:No", (request, response)=>{
    var connection = 
        mysql.createConnection(connectionDetails);

    var No = parseInt(request.params.No);

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

app.listen(9999, ()=>{console.log("server started")})