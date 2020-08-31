import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  WelcomeComponent from './WelcomeComponent'
import  ProductsComponent from './ProductsComponent'
import  ProductComponent from './ProductComponent'
import  ErrorComponent from './ErrorComponent'
import  LoginComponent from './LoginComponent'
import  LogoutComponent from './LogoutComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import ViewProductComponent from './ViewProductComponent'
import SignUpComponent from './SignUpComponent'
import SignUpSuccessComponent from './SignUpSuccessComponent'
import MyAccountComponent from './MyAccountComponent'

class Marketplace extends Component {
render(){
    return(
        <div>
    <Router>
       <div>
             <HeaderComponent />
            <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/signUp" component={SignUpComponent}/>
                <Route path="/signUpSuccess/:name" component={SignUpSuccessComponent}/>
                <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent}/>
                <AuthenticatedRoute path="/myaccount/:name" exact component={MyAccountComponent}/>
                <AuthenticatedRoute path="/users/:name" exact component={ProductsComponent}/>
                <AuthenticatedRoute path="/users/:name/products/:id" exact component={ProductComponent}/>
                <AuthenticatedRoute path="/welcome/productDetails/:id" exact component={ViewProductComponent}/>
                <Route path="/logout" exact component={LogoutComponent}/>

                <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent />
        </div>
    </Router>
    </div>
  
    )
}
}

export default Marketplace