import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Employees extends Component 
{
    state = { emps : [] }

    componentDidMount()
    {
        axios.get("http://127.0.0.1:9999/emps").then((reply)=>{
           var empsReceived = reply.data;
           this.setState({emps: empsReceived});
        })

        // var helper = new XMLHttpRequest();
        // helper.onreadystatechange  = ()=>{
        //     if(helper.readyState === 4 && 
        //             helper.status === 200)
        //     {
        //         var empsReceived = JSON.parse(helper.responseText);
        //         this.setState({emps: empsReceived});
        //     }
        // };
        // helper.open("GET", "http://127.0.0.1:9999/emps");
        // helper.send();
    }

    render() 
    { 
        return (<div className='container'>
                    <h1>Welcome Home</h1>
                    <hr></hr>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.emps.map((emp)=>{
                                    return <tr key={emp.No}>
                                            <td>{emp.No}</td>
                                            <td>{emp.Name}</td>
                                            <td>{emp.Address}</td>
                                           </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                  
                </div>);
    }
}
 
export default Employees;