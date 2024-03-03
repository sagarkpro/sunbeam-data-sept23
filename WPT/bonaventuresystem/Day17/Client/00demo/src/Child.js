function Child(props) 
{
    debugger;
    // return <>
    //         <h1>{props.myname}</h1>
    //         <h1>{props.myage}</h1>
    //        </>
    return (    <>
                    <h1>No : {props.data.No}</h1>
                    <h1>Name : {props.data.Name}</h1>
                    <button onClick={props.f1}>Click Me</button>
                </> );
}

export default Child;