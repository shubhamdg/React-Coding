import React, { Component } from 'react'
import axios from 'axios'

import { connect } from "react-redux";
import { getUsers, getUsersSuccess } from "../actions/UserAction";
class UserDeatils extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             post : []
        }
    }

    componentDidMount() {
  //  axios.get("https://jsonplaceholder.typicode.com/posts")
axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response)
            this.setState({post: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {post} = this.state
        return (
            <div>
                List of post 
                <br /> <br />
                {
                 post.length ?  // if there is atlease one post 
                 post.map(post => <div key={post.id}>{post.name}</div>) :  //display each post tiltle 
                        null
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { users: state.users };
  };




  function mapDispatchToProps(dispatch) {
    return {
        getUsers: (user) => dispatch(getUsers(user))
    };
  }
  

  
const FetchList = connect(mapStateToProps, mapDispatchToProps)(UserDeatils);

export default FetchList ; 

