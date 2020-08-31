import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from './AuthenticationService.js'

class SignUpComponent extends Component{

    constructor(props){
    super(props)

        this.state = {
            firstName : 'First Name',
            lastName : 'Last Name',
            username : 'Username' ,
            phone : 'Phone',
            email : 'Email' ,
            password: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    validate(values){
        let errors = {}
       // console.log("validate")
        if(!values.firstName) {
            errors.firstName = 'First Name cant be empty'
        } 
        if(!values.lastName) {
            errors.lastName = 'Last Name cant be empty'
        }
        if(!values.phone) {
            errors.phone = 'Phone number cant be empty'
        }
        if(!values.email) {
            errors.email = 'email cant be empty'
        }
        if(!values.username) {
            errors.username = 'username cant be empty'
        }
        if(!values.password) {
            errors.password = 'password cant be empty'
        }else if(values.password.length<8) {
            errors.password = 'password should contain atleast 8 characters'
        }

        return errors;
    }

    onSubmit(values) {
        //console.log("onsubmt"+values.firstName)
        let userDetails = {
            id : '',
            username : values.username,
            password : values.password,
            firstName : values.firstName,
            lastName: values.lastName,
            phone: values.phone,
            email: values.email
        }
        AuthenticationService.createUser(values.username, userDetails)
        .then(this.props.history.push(`/signUpSuccess/${values.username}`))

    }

    render() {
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let username = this.state.username
        let phone = this.state.phone
        let email= this.state.email
        let password = this.state.password
        return(
            <div>
    
             <div className="container">
                <Formik
                initialValues={{firstName,lastName,username,phone,email,password}}
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={this.validate}
                enableReinitialize={true}>

                    {
                      (props) => (
                          <Form>
                              <ErrorMessage name="firstName" component="div" className="alert alert-warning"/>
                              <ErrorMessage name="lastName" component="div" className="alert alert-warning"/>
                              <ErrorMessage name="username" component="div" className="alert alert-warning"/>
                              <ErrorMessage name="phone" component="div" className="alert alert-warning"/>
                              <ErrorMessage name="email" component="div" className="alert alert-warning"/>
                              <ErrorMessage name="password" component="div" className="alert alert-warning"/>
                              <fieldset className="form-group">
                              <label>First Name</label>
                                    <Field className="form-control" type="text" name="firstName" />
                              </fieldset>
                              <fieldset className="form-group">
                              <label>Last Name</label>
                                    <Field className="form-control" type="text" name="lastName" />
                              </fieldset>
                              <fieldset className="form-group">
                                    <label>Phone number</label>
                                    <Field className="form-control" type="text" name="phone" />
                              </fieldset>
                              <fieldset className="form-group">
                                    <label>Email</label>
                                    <Field className="form-control" type="text" name="email" />
                              </fieldset>
                              <fieldset className="form-group">
                                    <label>username</label>
                                    <Field className="form-control" type="text" name="username" />
                              </fieldset>
                              <fieldset className="form-group">
                                    <label>password</label>
                                    <Field className="form-control" type="password" name="password" />
                              </fieldset>
                              <button className="btn btn-success" type="submit">Submit</button>
                          </Form>
                      )  
                    }

                </Formik>
             </div>
             </div>
           
            
        )
    }
}

export default SignUpComponent