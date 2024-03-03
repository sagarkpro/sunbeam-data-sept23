import React, { Component } from 'react';

class TestInput extends Component 
{
    state = { Address: "", Age: 0 } 

    Change = ()=>{
        this.setState({Address: "Pune"})
    }

    OnTextChange =(args)=>{
        console.log(args.target.name + " changed to ")
        console.log(args.target.value);

        // this.setState({Address : args.target.value})
    }
    componentDidUpdate(){
        console.log("Component Updated")
    }
    render() 
    { 
        console.log("rendering...")
        return (<div style={{"margin": "10px"}}>
                    <input type='text' 
                           name='Address'
                           value={this.state.Address}
                           onChange={this.OnTextChange}
                        />
                    <br></br>
                    <input type='text' 
                           name='Age'
                           value={this.state.Age}
                           onChange={this.OnTextChange}
                        />
                     <br></br>
                    <button onClick={this.Change}>Click Me</button>
                </div>);
    }
}
 
export default TestInput;