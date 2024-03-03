import axios from "axios";
import { useEffect, useState } from "react";
function Home() 
{
    const [emps, setEmps ] = useState([]);
    const url = "http://localhost:5272/api/emps";

    const GetData = ()=>{
        axios.get(url).then((result)=>
        {
            //debugger;
            setEmps(result.data);
        })
    }
    useEffect(()=>{
        GetData();
    }, [])

    const Delete = (No)=>{
         axios.delete(url + "/" + No).then((result)=>
        {
           if( result.status === 200)
            GetData();
        else
            alert("something wrong!")
        })
    }

    return (<div>
                <center>
                    {
                        emps.map(emp=>{
                            return <div>
                                        <h1 key={emp.no}> 
                                        {emp.no}  
                                        {" "}
                                        {emp.name}
                                        </h1>
                                        <button onClick={()=>{
                                            Delete(emp.no)
                                        }}>Delete</button>
                                    </div>
                        })
                    }
                </center>
            </div>);
}

export default Home;