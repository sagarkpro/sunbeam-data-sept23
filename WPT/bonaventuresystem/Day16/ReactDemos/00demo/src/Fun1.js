import { useState } from "react";

function Demo()
{
    //state = {emp : {No : 1, Name: "Mahesh", Address: "Pune"}};

    const [emp, setEmp] = 
        useState({No : 1, Name: "Mahesh", Address: "Pune"})    

    const DoSomething = ()=>
    {
        //setEmp({No : 2, Name: "Nilesh", Address: "Chennai"})
        //setEmp({No : 1, Name: "Mahesh", Address: "Chennai"})
       
        // var copyOfEmp = {...emp};
        // copyOfEmp.Address = "Chennai";


         var copyOfEmp = {...emp, Address : "Chennai"};

        setEmp(copyOfEmp)

    }

    return (<>
                <h1>No is {emp.No}</h1>
                <h1>Name is {emp.Name}</h1>
                <h1>Address is {emp.Address}</h1>

                <button onClick={DoSomething}>Click Me</button>
            </>)
}

export default Demo;


//------------------------------------------Code Ref 1
// import { useState } from "react";

// function Demo()
// {
//     //state = {name: "mahesh"};
//     //setState({name: "nilesh"});
    
//     const [name, setName] = useState("mahesh")    

//     const DoSomething = ()=>{setName("Nilesh")}

//     return (<>
//                 <h1>Welcome {name}</h1>
//                 <button onClick={DoSomething}>Click Me</button>
//             </>)
// }

// export default Demo;