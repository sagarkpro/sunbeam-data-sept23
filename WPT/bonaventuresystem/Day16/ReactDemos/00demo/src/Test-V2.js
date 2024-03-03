import React, { Component } from 'react';

class Test extends Component 
{
    state = { Name: "Mahesh", Address : "Pune" } 


    DoSomething =()=>{
      //debugger
      this.setState({ Name: "Nilesh" } )
    }

    DoSomethingElse =()=>{
      //debugger
      this.setState({ Address: "Chennai" } )
    }

    render() { 
        //debugger;
        return (<div>
                    <h1>Welcome {this.state.Name} from {this.state.Address}</h1>
                    <button onClick={this.DoSomething}>Click Me</button>
                    <button onClick={this.DoSomethingElse}>Click Me 2</button>
                </div>);
    }
}
 
export default Test;
