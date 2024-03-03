import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Employees extends Component 
{
    state = {
              emps : [],
              emp : {No : "", Name : "", Address: ""}
            }

    componentDidMount()
    {
       this.GetRecords();
    }

    OnTextChange=(args)=>{
        var copyOfEmp = {...this.state.emp};
        copyOfEmp[args.target.name] = args.target.value;
        this.setState({emp : copyOfEmp})
    }

    GetRecords = ()=>{
         axios.get("http://127.0.0.1:9999/emps").then((reply)=>{
           var empsReceived = reply.data;
           this.setState({emps: empsReceived});
        })
    }

    ResetState = ()=>{
        this.setState({emp : {No : "", Name : "", Address: ""}});
    }

    AddRecord = ()=>{
        console.log(this.state.emp);

        axios.post("http://127.0.0.1:9999/emps", this.state.emp).then((reply)=>{
           var responseReceived = reply.data;
           if(responseReceived.affectedRows!==undefined &&
                responseReceived.affectedRows>0)
                {
                    this.ResetState();
                    this.GetRecords();
                }
            else
            {
                alert("Something wrong!")
            }

          
        })
    }

    RemoveRecord = (args)=>{
        var RecordNoToDelete = args.target.name
         axios.delete("http://127.0.0.1:9999/emps/" + RecordNoToDelete).then((reply)=>{
           var responseReceived = reply.data;
           if(responseReceived.affectedRows!==undefined &&
                responseReceived.affectedRows>0)
                {
                    this.GetRecords();
                }
            else
            {
                alert("Something wrong!")
            }
        })
    }

    EditRecord =(args)=>{
        var RecordNoToEdit = parseInt(args.target.name);

        for(var i=0; i<this.state.emps.length; i++)
        {
            if(this.state.emps[i].No === RecordNoToEdit)
            {
                var empToEdit = {...this.state.emps[i]};
                this.setState({emp: empToEdit});
                break;
            }
        }
    }

    UpdateRecord = ()=>{
          axios.put("http://127.0.0.1:9999/emps/" + this.state.emp.No, this.state.emp).then((reply)=>{
           var responseReceived = reply.data;
           if(responseReceived.affectedRows!==undefined &&
                responseReceived.affectedRows>0)
                {
                    this.ResetState();
                    this.GetRecords();
                }
            else
            {
                alert("Something wrong!")
            }
        })
    }
    render() 
    { 
        return (<div className='container'>
                    <h1>Welcome Home</h1>
                    <hr></hr>
                   <center>
                     <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <td>No</td>
                                    <td>
                                        <input type='text'
                                        name='No'
                                        value={this.state.emp.No}
                                        onChange={this.OnTextChange}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type='text'
                                        name='Name'
                                        value={this.state.emp.Name}
                                        onChange={this.OnTextChange}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Address</td>
                                    <td>
                                        <input type='text'
                                        name='Address'
                                        value={this.state.emp.Address}
                                        onChange={this.OnTextChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className='btn btn-primary' onClick={this.AddRecord}>Add Record</button>
                                        {" "}
                                          <button className='btn btn-success' onClick={this.UpdateRecord}>Update Record</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                   </center>
                    <hr></hr>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.emps.map((emp)=>{
                                    return <tr key={emp.No}>
                                            <td>{emp.No}</td>
                                            <td>{emp.Name}</td>
                                            <td>{emp.Address}</td>
                                            <td>
                                            <button className='btn btn-danger' name={emp.No}
                                            onClick={this.RemoveRecord}>Remove</button>
                                            {" "}
                                             <button className='btn btn-warning' name={emp.No}
                                            onClick={this.EditRecord}>Edit</button>
                                            </td>
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