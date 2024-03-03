import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './DashboardParts/Logo';
import UpperTable from './DashboardParts/UpperTable';
import './common.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

function Dashboard() 
{
    const [emps, setEmps] =  useState([]);
    const [emp, setEmp] = useState({No: "", Name: "", Address: ""});
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');

    const url = "http://127.0.0.1:9999/emps"

    useEffect(()=>{
        GetRecords();
    }, []); //as good as componentDidMount

    const GetRecords =()=>{
        axios.get(url).then((result)=>{
            var employeesReceived = result.data;
            setEmps(employeesReceived);
        });

    } 
    const ShowMessage=(msg)=>{
         setMessage(msg);
         setTimeout(() => {
                 setMessage("");
         }, 2000);
    }

    const AddRecord = ()=>{
         axios.post(url, emp).then((result)=>{
           if(result.data.affectedRows!==undefined &&
              result.data.affectedRows > 0)
            {
                ShowMessage("Record Added!");
                Reset();
                GetRecords();
            }
            else
            {
                ShowMessage("Something went wrong!")
            }
        });
    }

    const OnTextChanged=(args)=>{
        var copyOfEmp = {...emp};
        copyOfEmp[args.target.name] =    args.target.value;
        setEmp(copyOfEmp)
    }

    const Reset = ()=>{
        setEmp({No: "", Name: "", Address: ""});
    }

    const RemoveRecord = (No)=>{
        var updatedUrl = url + "/" + No;

        axios.delete(updatedUrl).then((result)=>{
           if(result.data.affectedRows!==undefined &&
              result.data.affectedRows > 0)
            {
                ShowMessage("Record Removed!");
                GetRecords();
            }
            else
            {
                ShowMessage("Something went wrong!")
            }
        });
    }

    const EditRecord =(empToEdit)=>{
        setEmp({...empToEdit});
        setisDisabled(null);
    }

    const UpdateRecord = ()=>
    {
        var updatedUrl = url + "/" + emp.No;

         axios.put(updatedUrl, emp).then((result)=>{
           if(result.data.affectedRows!==undefined &&
              result.data.affectedRows > 0)
            {
                ShowMessage("Record Updated!");
                Reset();
                GetRecords();
            }
            else
            {
                ShowMessage("Something went wrong!")
            }
        });
            
    }

    const OnSearch = (args)=>{
        setSearchText(args.target.value);
    }

    return (<div className='container'>
                <Logo/>
                <hr></hr>
               <center>
                 <UpperTable emp={emp} 
                             OnTextChanged={OnTextChanged}
                             AddRecord = {AddRecord}
                             Reset = {Reset}
                             UpdateRecord = {UpdateRecord}
                             isDisabled = {isDisabled}/>
                 <hr></hr>
                 <div className='alert alert-info'>{message}</div>
                 <center>
                    <strong>
                        Search By City Value:
                    </strong> {" "}
                    <input type='text' value={searchText}
                           onChange={OnSearch}/>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            emps.map((emp)=>
                            {
                                if(searchText!=="")
                                {
                                    //Check the emp.Address
                                    if(emp.Address.toLowerCase().includes(searchText.toLowerCase()))
                                    {
                                        //return row
                                        return <tr key={emp.No}>
                                        <td>{emp.No}</td>
                                        <td>{emp.Name}</td>
                                        <td>{emp.Address}</td>
                                        <td>
                                            <button 
                                            className='btn btn-danger'
                                            onClick={()=>{
                                                RemoveRecord(emp.No)
                                            }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                        <td>
                                            <button 
                                            className='btn btn-warning'
                                            onClick={()=>{
                                                EditRecord(emp)
                                            }}
                                            >
                                                Edit
                                            </button>

                                        </td>
                                        </tr>
                                    }
                                    else
                                    {
                                        return null;
                                    }
                                }
                                else
                                {
                                    //Show all records
                                    return <tr key={emp.No}>
                                        <td>{emp.No}</td>
                                        <td>{emp.Name}</td>
                                        <td>{emp.Address}</td>
                                        <td>
                                            <button 
                                            className='btn btn-danger'
                                            onClick={()=>{
                                                RemoveRecord(emp.No)
                                            }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                        <td>
                                            <button 
                                            className='btn btn-warning'
                                            onClick={()=>{
                                                EditRecord(emp)
                                            }}
                                            >
                                                Edit
                                            </button>

                                        </td>
                                        </tr>
                                }
                              
                            })
                        }
                        </tbody>

                    </table>
                  </div>
               </center>
            </div>);
}

export default Dashboard;