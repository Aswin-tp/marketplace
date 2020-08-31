import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import ProductService from '../api/ProductService.js'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ProductComponent extends Component{

constructor(props) {
   super(props)

this.state = {
    id : this.props.match.params.id,
    price : '',
    username : this.props.match.params.name ,
    productName: '',
    description:''
}

this.onSubmit = this.onSubmit.bind(this);
this.validate = this.validate.bind(this);

}

componentDidMount() {
    if(this.state.id === -1) {
        return
    }
    let username = AuthenticationService.getLoggedinUsername
    ProductService.getProduct(this.state.id)
    .then(response => this.setState({
    price : response.data.price,
    productName : response.data.productName
    }))
    //console.log("prodname is" + this.state.id)
    }

validate(values){
    console.log("inside validate")
 let errors = {}
 if(!values.productName){
    errors.productName = 'Product Name cant be empty'
 }
 if(!values.price){
    errors.price = 'Price cant be empty'
 }
 if(!values.description){
    errors.description = 'Add some decription about the product'
 }
 return errors
}
    onSubmit(values){
        
        console.log("inside onsubmit"+values);
        let username = AuthenticationService.getLoggedinUsername();
        let product = {
            id : this.state.id,
            productName : values.productName,
            price : values.price,
            username : username,
            description : values.description
        }

        if(this.state.id === -1){
            ProductService.createProduct(username, product)
            .then(() => this.props.history.push(`/users/${username}`))
        } else {
            ProductService.updateProduct(username, this.state.id, product)
            .then(() => this.props.history.push(`/users/${username}`))
        }
        
    }

    render() {
        let { productName, price, description } = this.state
        return(
            <div>
                name is {this.props.match.params.name} and id is {this.props.match.params.id}
                 prodname is {this.state.productName} price is {this.state.price}
                 <h1>Product Details</h1>
                 <div className="container">
                    <Formik
                    initialValues={{ productName, price, description }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>

                        {
                          (props) => (
                              <Form>
                                  <ErrorMessage name="productName" component="div"
                                        className="alert alert-warning" />
                                  <ErrorMessage name="price" component="div"
                                        className="alert alert-warning" />
                                  <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                  <fieldset className="form-group">
                                        <label>Product Name</label>
                                        <Field className="form-control" type="text" name="productName" />
                                  </fieldset>
                                  <fieldset className="form-group">
                                        <label>Price</label>
                                        <Field className="form-control" type="text" name="price" />
                                  </fieldset>
                                  <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                  </fieldset>
                                  <button className="btn btn-success" type="submit">Save</button>
                              </Form>
                          )  
                        }

                    </Formik>
                 </div>
            </div>
        )
    }

}

export default ProductComponent;