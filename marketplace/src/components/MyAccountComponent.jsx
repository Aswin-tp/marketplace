import React, {Component} from 'react'
import ProductService from '../api/ProductService.js'
import { Link } from 'react-router-dom'

class MyAccountComponent extends Component {

    constructor(props){
        super(props)
    
            this.state = {
              userDetail : ''
            }
            this.componentDidMount = this.componentDidMount.bind(this)
            
        }

        componentDidMount() {
ProductService.getUserDetails(this.props.match.params.name)
.then(
    response => {
        this.setState({userDetail : response.data})
}
  
)
//console.log("detail"+this.state.userDetail);
        }    

render(){
    return(
        <div>
          <h2> My account of {this.state.userDetail.firstName} {this.state.userDetail.lastName} </h2>
          <h4>Username : {this.state.userDetail.username}</h4>
          <h4>phone : {this.state.userDetail.phone}</h4>
          <h4>email : {this.state.userDetail.email}</h4>

          You can manage your products <Link to={`/users/${this.state.userDetail.username}`}>here</Link>.
        </div>
    )
}
}

export default MyAccountComponent