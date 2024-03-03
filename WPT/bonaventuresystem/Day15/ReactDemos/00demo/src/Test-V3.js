import React, { Component } from 'react';

class Test extends Component 
{
    state = { emp : {Name: "Mahesh", Address : "Pune" }} 


    DoSomething =()=>{
      debugger
      var copyOfEmp = {...this.state.emp};
      copyOfEmp.Name = "Nilesh";

      // this.setState({ emp:   {Name: "Nilesh", Address : "Pune" } } )
       this.setState({ emp:   copyOfEmp } )
    }

    DoSomethingElse =()=>{
      //debugger
      var copyOfEmp = {...this.state.emp};
      copyOfEmp.Address = "Chennai";
      
      this.setState({ emp:   copyOfEmp } )
    }

    render() { 
        //debugger;
        return (<div>
                    <h1>Welcome {this.state.emp.Name} from {this.state.emp.Address}</h1>
                    <button onClick={this.DoSomething}>Click Me</button>
                    <button onClick={this.DoSomethingElse}>Click Me 2</button>
                </div>);
    }
}
 
export default Test;
