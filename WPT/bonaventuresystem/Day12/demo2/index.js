const http = require('http');
//console.log(http);


const helper  = http.createServer((request, response)=>{
    console.log(`You requested for ${request.url}`);

    if(request.url  == "/customers")
    {
        response.setHeader("Content-Type","text/plain")
        response.write("Hi from Node JS");
        response.end();
    }
    else if(request.url  == "/home")
    {
        response.setHeader("Content-Type","text/html");
        response.write(`
                        <html>
                            <head>
                                <title>home</title>
                            </head>
                            <body>
                                <h1 style="background-color:yellow">Welcome Home!</h1>
                            </body>
                        </html>
                       `);
        
        response.end();
    }
    else if(request.url  == "/emps")
    {
        response.setHeader("Content-Type","application/json");
        var employee = {No : 1, Name: "Mahesh", "Addres": "Pune"};

        response.write(JSON.stringify(employee));
        
        response.end();
    }
});



helper.listen(9999,()=>{
        console.log("server started listening at 9999")
    })