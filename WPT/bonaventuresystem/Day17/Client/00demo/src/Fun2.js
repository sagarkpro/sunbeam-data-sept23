import { useEffect, useState } from "react";

function Demo()
{
    const [name, setName] = useState("")  
    const [address, setAddress] = useState("")    

    const DoSomething1 = ()=>{setName("Nilesh")}
    
    const DoSomething2 = ()=>{setAddress("chennai")}

    useEffect(()=>{
        console.log("Component Did Mount Like Code Called.")
    },[])

    useEffect(()=>{
        console.log("Name changed")
    },[name])

    useEffect(()=>{
        console.log("Address Changed")
    },[address])

     useEffect(()=>{
        console.log("Name OR Address Changed.")
    },[name, address])

    

    console.log("UI is about to be returned.")
    return (<>
                <h1>Name is  {name}</h1>
                 <h1>Address is  {address}</h1>
                <button onClick={DoSomething1}>Click Me 1</button>
                <button onClick={DoSomething2}>Click Me 2</button>
            </>)
}

export default Demo;