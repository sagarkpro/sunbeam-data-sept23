const fs = require('fs');
//console.log(fs);


// console.log("hi");

// var files = fs.readdirSync("C:\\Users\\Admin\\OneDrive\\Desktop\\DAC\\Day11\\NodeDemos\\00Demo")

// for(var i = 0; i < files.length; i ++)
// {
//     console.log(files[i]);
// }

// console.log("Bye")





console.log("hi");

fs.readdir("C:\\Users\\Admin\\OneDrive\\Desktop\\DAC\\Day11\\NodeDemos\\00Demo",(error, files)=>{
    if(error==null)
    {
        for(var i = 0; i < files.length; i ++)
        {
            console.log(files[i]);
        }
    }
    else
    {
        console.log("something wrong!");
    }
})



console.log("Bye")
