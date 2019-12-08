import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import { getUsers } from '../../services/api/users'

import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state={
            value:'',
            user:{},
            error: ''
        }
    }

    valueInput = (value) => {
        this.setState({
          value: value.target.value
        })
      }
    
      searchUser = () => { 
        getUsers(this.state.value).then((res) => {
          this.setState({
            user: res.data,
            error:''
          })
          this.props.history.push({
              pathname: '/results', 
              state: {
                  user: this.state.user
              }
          });
        }).catch(err => { 
          this.setState({
            error:'User not found'
          })
          this.props.history.push({
            pathname: '/results',
            state: {
             error: "User not found :("
            }
          })
        })
      }     

    render(){
        return(  
            <div className="home" >
                <Search
                  classe='search'
                  change={this.valueInput}
                  click={this.searchUser}
                />
            </div>
           
        )   
    }
}

export default Home