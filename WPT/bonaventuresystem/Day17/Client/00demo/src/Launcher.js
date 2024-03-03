import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from './DashboardParts/Logo';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './home';
import AboutUs from './About';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Profile';

function Launcher() 
{
    return (<div className='container'>
                <Logo/>
                <hr></hr>
                 <Link to="/home">Home</Link> {" | "}
                 <Link to="/about">About Us</Link> {" | "}
                 <Link to="/db">Dashboard</Link> {" | "}
                 <Link to="/profile">Profile</Link> {" | "}
                <hr></hr>
                    <Switch>
                       <Route path="/" exact component={Home}/> 
                       <Route path="/home" exact component={Home}/> 
                       <Route path="/about" exact component={AboutUs}/> 
                       <ProtectedRoute path="/db" exact 
                                       component={Dashboard}/> 
                       <ProtectedRoute path="/profile" exact 
                                       component={Profile}/> 
                       <Route path="*" exact component={NotFound}/> 
                    </Switch>
                <hr></hr>
                <center>
                <strong>Made by Sunbeam. 2023.</strong>
                </center>
            </div>);
}

export default Launcher;