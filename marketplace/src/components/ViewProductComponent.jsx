import React, {Component} from 'react'
import ProductService from '../api/ProductService.js'
import prodImage from '../assets/logo.png';

class ViewProductComponent extends Component {

    constructor(props) {
        super(props)

        this.state  = {
            id : this.props.match.params.id,
            product : '',
            userDetail : '',
            showUserDetails : false
        }

        this.getContactDetails = this.getContactDetails.bind(this)
    }

    componentDidMount() {
        //console.log("component mount view product")
        this.refreshProducts();
        }

    refreshProducts(){
            //console.log("refresh product");
            ProductService.getProduct(this.state.id)
            .then(
                response => {
                             this.setState({product : response.data})
                }
              
            )
            
            //console.log(this.state.product)
        }
         
        getContactDetails(username){
            //console.log("inside get contact")
            ProductService.getUserDetails(username)
            .then(
                response => {
                    this.setState({userDetail : response.data,
                    showUserDetails : true})
            }
              
            )
        }
       

    render() {
        return(
            <div className="product-container">
                <div className="product-view">
                    <img src={prodImage} alt="product" style={{ width: 300, height: 300, margin: 10, float: 'right'}}/>
                </div>

                 <div className="product-view">
                  <h2>{this.state.product.productName}</h2>
                  <p>{this.state.product.price} Rs</p>
                  <p>Added by {this.state.product.username}</p>
                  <p>{this.state.product.description}</p>
                  <button className="btn btn-success" type="submit" onClick={() => this.getContactDetails(this.state.product.username)}>Show contact</button>
                  {this.state.showUserDetails && <div><p>phone : {this.state.userDetail.phone} </p> <p>email : {this.state.userDetail.email}</p></div>}
            
                  </div>
            
            </div>
        )
    }
}

export default ViewProductComponent;