import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class SignUpSuccessComponent extends Component {
constructor(props){
    super(props)

    this.gotoLogin=this.gotoLogin.bind(this)
}

gotoLogin(){
    //console.log("gotologin")
    this.props.history.push(`/login`)
}

render(){
    return(
        <div>
           
            <h1>Signed up successfully!!</h1>
            <button className="btn btn-success" type="submit" onClick={this.gotoLogin}>Go to Login</button>
        </div>
        
    )
}
}

export default SignUpSuccessComponent