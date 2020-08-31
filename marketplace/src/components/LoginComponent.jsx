import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

constructor(props){
    super(props)

    this.state = {
         username: 'aswin',
         password: '',
         hasLoginFailed: false,
         showSuccessMessage: false
    }
    this.loginClicked = this.loginClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);
}

handleChange(event) {
    console.log(this.state);
    this.setState(
        {
            [event.target.name]
                : event.target.value
        }
    )
}

loginClicked() {
   //console.log("login clicked");
    // if((this.state.username ==='aswin' && this.state.password==='tptp') || (this.state.username ==='aswintp' && this.state.password==='tp')){
    //     this.setState({showSuccessMessage: true});
    //     this.setState({hasLoginFailed: false});
    //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
    //     this.props.history.push(`welcome/${this.state.username}`);
    // } 
    // else {
    //     this.setState({showSuccessMessage: false});
    //     this.setState({hasLoginFailed: true});
    // }
    // console.log(this.state.showSuccessMessage);
    // console.log(this.state.hasLoginFailed);

    AuthenticationService
    .executeAuthenticationService(this.state.username, this.state.password)
    .then((response) => {
            AuthenticationService.registerSuccessfulLogin(this.state.username, response.data.token);
            this.props.history.push(`welcome/${this.state.username}`);
        }).catch( () => {
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
        }

    )
}

signUpClicked() {
    //console.log("signup clicked")
    this.props.history.push(`signUp`);
}

render(){
    return(
        <div className="container">
            <h1>Login</h1>
            {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials </div>}
            {this.state.showSuccessMessage && <div> Login Successful</div>}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            <div>
                <hr />
                Don't have an account !
                <button className="btn btn-success" onClick={this.signUpClicked}>SignUp</button>
            </div>
        </div>
    )
}
}

export default LoginComponent