import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import ProductService from '../api/ProductService.js'
import prodImage from '../assets/logo.png';

class ProductComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            products : []
        }

        this.refreshProducts = this.refreshProducts.bind(this)
         this.addProduct = this.addProduct.bind(this)
        // //this.deleteProduct = this.deleteProduct(this)
        // this.editProduct = this.editProduct(this)
    }

    componentDidMount() {
//console.log("product component did mount");
this.refreshProducts();
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate')
        return true
    }

    refreshProducts(){
        console.log("refresh product");
        let username = AuthenticationService.getLoggedinUsername();
        ProductService.executeGetProducts(username)
        .then(
            response => {
                         this.setState({products : response.data})
            }
          
        )
    }

    editProduct(id) {
        //console.log('edit called id is'+ id)
        this.props.history.push(`${this.props.match.params.name}/products/${id}`)
    }

    deleteProduct(id) {
        console.log('delete called')
        let username = AuthenticationService.getLoggedinUsername();
        ProductService.deleteProduct(username,id)
        .then(
           response => {
               this.refreshProducts()
           } 
        )
    }

    addProduct() {
        //console.log('add called')
        this.props.history.push(`${this.props.match.params.name}/products/-1`)
    }


render(){
    return(
        <>
        <div>
            <h2>Products of {this.props.match.params.name}</h2>
        </div>
        <div>
    {
    this.state.products.map(product => 
    <div className="product" key={product.id}> 
    <img src={prodImage} alt="product" className='product-image'/>
    <h2>{product.productName}</h2>
    <p>{product.price} Rs</p>
    <button className="btn btn-success" onClick={() => this.editProduct(product.id)}>Edit</button>
    <button className="btn btn-success" onClick={() => this.deleteProduct(product.id)}>Delete</button></div>)
    }
    <button className="btn btn-success" onClick={this.addProduct}>Add Product</button>
        </div>
        </>
    )
}
}

export default ProductComponent