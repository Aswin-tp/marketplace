import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LogoutComponent extends Component {
render(){
    return(
        <div>
            {AuthenticationService.logout("aswin")}
            <h1>Logged out successfully!!</h1>
        </div>
        
    )
}
}

export default LogoutComponent