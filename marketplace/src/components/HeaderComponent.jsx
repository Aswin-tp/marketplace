import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import {withRouter} from 'react-router'

class HeaderComponent extends Component {

        
render(){
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const username = AuthenticationService.getLoggedinUsername();
    console.log(username);
    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div><a href="https://www.linkedin.com/in/aswin-thekepoyil/" className="navbar-brand">Connect with me</a></div>
            <ul className="navbar-nav">
               <li><Link className="nav-link" to="/welcome/aswin">Home</Link></li> 
            </ul>
            
            <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
            {/*console.log("isuserloggedin" + this.state.isUserLoggedIn))*/}
            {isUserLoggedIn && <li><Link className="nav-link" to={`/myaccount/${username}`}>MyAccount</Link></li>}
            {isUserLoggedIn && <li><Link className="nav-link" to="/logout">Logout</Link></li>}
            </ul>
            <hr />
        </nav>
        </header>
    )
}
}

export default withRouter(HeaderComponent);