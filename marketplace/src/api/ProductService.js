import axios from 'axios';

class ProductService {
    executeGetProducts(username){
       // console.log("executing get products call")
        return axios.get(`http://localhost:8080/products/${username}`);
    }

    getUserDetails(username){
        //console.log("executing get uyser details call")
        return axios.get(`http://localhost:8080/userdetails/${username}`);
    }

    getSearchQuery(query){
        //console.log("executing get search details call")
        return axios.get(query);
    }

    getProduct(id){
        //console.log("executing get product call" +id)
        return axios.get(`http://localhost:8080/product/${id}`);
    }

    getAllProducts(){
        //console.log("executing get all products call")
        return axios.get(`http://localhost:8080/products`);
    }

    deleteProduct(username, id){
        //console.log("executing delete products call")
        return axios.delete(`http://localhost:8080/products/${username}/${id}`);
    }

    createProduct(username, product){
       // console.log("executing create product call for " + product)
        return axios.post(`http://localhost:8080/products/${username}`, product);
    }
    updateProduct(username, id, product){
        //console.log("executing update product call for" + product)
        return axios.put(`http://localhost:8080/products/${username}/${id}`, product);
    }


}

export default new ProductService;