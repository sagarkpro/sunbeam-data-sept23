import React, { Component } from 'react';

class Test extends Component 
{
    state = { Name: "Mahesh" } 

    constructor()
    {
        debugger;
        super();
    }

    DoSomething =()=>{
       // console.log("U clicked!")   
       debugger
      // this.state.Name = "Nilesh";///Dont do this to change state

      this.setState({ Name: "Nilesh" } )
    }

    componentDidMount(){
        debugger;
    }

    shouldUpdate = false;

    shouldComponentUpdate()
    {
        debugger;
        //Logic to compare state values and take a decision
        // whether to go for UI updation via render or not
        return this.shouldUpdate;
    }
    componentDidUpdate(){
        debugger;
    }

    render() { 
        debugger;
        return (<div>
                    <h1>Welcome {this.state.Name}</h1>
                    <button onClick={this.DoSomething}>Click Me</button>
                </div>);
    }
}
 
export default Test;
