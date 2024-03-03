import React, { Component } from 'react';

class TestInput extends Component 
{
    state = { emp: {No : "", Name: "", Address: ""} } 

    Show = ()=>{
       console.log(this.state.emp)
    }

    OnTextChange =(args)=>{
        console.log(args.target.name + " changed to ")
        console.log(args.target.value);

        var copyOfEmp = {...this.state.emp};

        copyOfEmp[args.target.name] = args.target.value
        this.setState({emp:  copyOfEmp});

    }
    componentDidUpdate(){
        console.log("Component Updated")
    }
    render() 
    { 
        console.log("rendering...")
        return (<div style={{"margin": "10px"}}>
                   No :  <input type='text' 
                           name='No'
                           value={this.state.emp.No}
                           onChange={this.OnTextChange}
                        />
                    <br></br>
                    Name :  <input type='text' 
                            name='Name'
                            value={this.state.emp.Name}
                            onChange={this.OnTextChange}
                        />
                    <br></br>
                    Address :  <input type='text' 
                           name='Address'
                           value={this.state.emp.Address}
                           onChange={this.OnTextChange}
                        />
                    <br></br>
                    <button onClick={this.Show}>Click Me</button>
                </div>);
    }
}
 
export default TestInput;