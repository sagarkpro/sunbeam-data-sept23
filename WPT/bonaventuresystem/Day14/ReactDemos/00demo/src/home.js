// function Home()
// {
//     return <h1>
//                 Welcome Home!
//            </h1>
// }

import { Component } from "react";


class Home extends Component
{

    state = {Name : "mahesh"}

    
    componentDidMount(){
        debugger;
    }

    render()
    {
        debugger;
         return <h1>
                        Welcome Home {this.state.Name}
                </h1>
    }
}

export default Home; 