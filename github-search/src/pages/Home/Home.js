import React, { Component }from 'react'
import Search from '../../components/Search/Search'
import { getUsers } from '../../services/api/users'

import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state={
            value:'',
            user:{}
        }
    }

    valorInput = (param) => {
        this.setState({
          value: param.target.value
        })
        console.log(param.target.value)
      }
    
      searchUser = () => { 
        getUsers(this.state.value).then((res) => {
          this.setState({
            user: res.data
          })
          this.props.history.push({
              pathname: '/results', 
              state: {
                  user: this.state.user
              }
          })
        }).catch(err => { })
      }

     

    render(){
        return(
        
            <div className="home" >
                <Search 
                classe='search'
                change={this.valorInput}
                click={this.searchUser}
                />

            </div>
           
        )   
    }
}

export default Home