import { useState } from "react";
import Child from "./Child";

function Parent() 
{
    const [emp, setEmp] = useState({No: 1, Name: "Mahesh"});
    
    const DoChange = ()=>
    {
        debugger;
        setEmp({No : 2, Name : "Nilesh"})
    }
    debugger;
    return (<>
                <Child data = {emp} f1={DoChange}></Child>
               
            </>);
}

export default Parent;