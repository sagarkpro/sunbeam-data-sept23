const mysql = require('mysql');

const connectionDetails = {
                             host: "localhost",
                             database: "dac",
                             user: "root",
                             password: "manager"
                          };

var connection =  
        mysql.createConnection(connectionDetails);

connection.query("select * from Emp",
                        (error, result)=>{
                        if(error==null)
                        {
                          var dataInJSONString=
                          JSON.stringify(result)
                          console.log(dataInJSONString);
                          connection.end();
                        }
                        else
                        {
                          var errorInJSONString =
                          JSON.stringify(error);
                          console.log(errorInJSONString);
                          connection.end();
                        }
                        } );

// console.log(mysql);