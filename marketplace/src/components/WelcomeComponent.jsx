import React, {Component} from 'react'
import ProductService from '../api/ProductService.js'
import prodImage from '../assets/logo.png';
import Pagination from './Pagination.js'

class WelcomeComponent extends Component {

constructor(props){
    super(props)

    this.state = {
        username : this.props.match.params.name,
        products : [],
        currentpage : 1,
        productsPerPage : 10,
        searchKeyword : ''
    }
    this.buyProduct = this.buyProduct.bind(this);
    this.refreshProducts = this.refreshProducts.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
}


componentDidMount() {
    //console.log("component mount buy products")
    this.refreshProducts();
    }

refreshProducts(){
        //console.log("refresh product");
        ProductService.getAllProducts()
        .then(
            response => {
                         this.setState({products : response.data})
            }
          
        )
    }

    buyProduct(id) {
        //console.log("inside buyProduct"+id)
        this.props.history.push(`productDetails/${id}`);
    }

    handleChange(event) {
       // console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    searchClicked(keyword) {
        //console.log("search clicked"+keyword)
        let query = "http://localhost:8080/productsearch?search=(productName:'*"+keyword+"*')"
        console.log(query)
        ProductService.getSearchQuery(query)
        .then(
            response => {
                         this.setState({products : response.data})
            }
          
        )
    }

    setCurrentPage(pageNumber) {
    this.setState({
    currentpage : pageNumber
    })
    }

render(){

    const indexOfLastProduct = this.state.currentpage * this.state.productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage
    const currentProducts = this.state.products.slice(indexOfFirstProduct,indexOfLastProduct);

    const paginate = (pageNumber) => this.setCurrentPage(pageNumber);
    return(
        <>
        <div className="container">
           <h3>Welcome {this.state.username}.</h3> 
            Search for a product
            <input type="text" name="searchKeyword" value={this.state.searchKeyword} onChange={this.handleChange}></input>
            <button className="btn btn-success" onClick={() => this.searchClicked(this.state.searchKeyword)}>Search</button>
        </div>


        <div>
            </div>
                 <div>
                 {
                 currentProducts.map(product => 
                 <div className="product" key={product.id} onClick={() => this.buyProduct(product.id)}> 
                 <img src={prodImage} alt="product" className='product-image'/>
                 <h4>{product.productName}</h4>
                 <p>{product.price} Rs</p>
                 </div>)
                 }
                     </div>
           <Pagination productsPerPage={this.state.productsPerPage} totalProducts={this.state.products.length} paginate={paginate}/>
        </>
    )
}
}

export default WelcomeComponent