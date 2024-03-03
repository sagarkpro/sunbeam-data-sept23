import React, { Component } from 'react';
class Employees extends Component 
{
    state = { emps : [] }

    componentDidMount()
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange  = ()=>{
            if(helper.readyState === 4 && 
                    helper.status === 200)
            {
                var empsReceived = JSON.parse(helper.responseText);
                debugger;
                this.setState({emps: empsReceived});
            }
        };
        helper.open("GET", "http://127.0.0.1:9999/emps");
        helper.send();
    }

    render() 
    { 
        // return <>
        //           <h1>hi</h1>
        //           <h1>hello</h1>
        //        </>  
        debugger;
        return (<>
                    <h1>Welcome Home</h1>
                    <hr></hr>
                    {
                        this.state.emps.map((emp)=>{
                            return <h1 key={emp.No}>{emp.Name}</h1>
                        })
                    }
                </>);
    }
}
 
export default Employees;