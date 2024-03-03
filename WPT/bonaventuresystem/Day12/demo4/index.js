const http = require('http');
const mysql = require('mysql');
const { hostname } = require('os');
const connectionDetails = {
                            host: "localhost",
                            database: "dac",
                            user: "root",
                            password: "manager"
                          };

const server = http.createServer((request, response)=>{
    if(request.url == "/emps")
    {
      var connection = 
            mysql.createConnection({
              host: 'localhost',
              database: 'someDB',
              user: 'root',
              password: 'Sagar@123'
            });
      var queryText = `select * from Emp`;

      connection.query(queryText,(error, result)=>{
        response.setHeader("Content-Type", 
                           "application/json")
        if(error==null)
        {
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
      })
    }
    else
    {
        response.setHeader("Content-Type", "text/plain")
        response.write("We can't serve this resource!");
        response.end();
    }
});
server.listen(9999, ()=>{console.log("server started")})