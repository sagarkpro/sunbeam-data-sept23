import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import Dashboard from './Dashboard';
import Launcher from './Launcher';
// import Parent from './Parent';
// import Home from './home';
// import Test from './Test';
// import Employees from './Employees';
// import TestInput from './TestInput';
// import Demo from './Fun2';

//debugger;
const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<Home/>);
// root.render(<Test/>);
// root.render(<Employees/>)
// root.render(<TestInput/>)
//root.render(<Employees/>)
// root.render(<Demo/>)

root.render(<BrowserRouter>
                <Launcher/>
            </BrowserRouter>)

// root.render(<Parent/>)
