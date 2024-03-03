const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(`${request.method}  ${request.url}`);
    if(request.url == "/emps")
    {
        if(request.method == "GET")
        {
            //select * from Emp code here
            response.write("SELECT * from Emp Output");
            response.end();
        }
        else if(request.method == "POST")
        {
            //insert into Emp code here
            response.write("Insert into Emp Output");
            response.end();
        }
        else if(request.method == "PUT")
        {
            //update  Emp code here
            response.write("Update Emp Output");
            response.end();
        }
         else if(request.method == "DELETE")
        {
            //delete from Emp code here
            response.write("Deleete Emp Output");
            response.end();
        }
    }
    else if(request.url == "/customers")
    {
        if(request.method == "GET")
        {
             //select * from Customer code here
            response.write("SELECT * from Customers Output");
            response.end();
        }
    }
    else if(request.url == "/admin")
    {

    }
    else
    {
        response.write("sorry! we can not serve you!");
        response.end();
    }
});
server.listen(9999, ()=>{console.log("server started")})