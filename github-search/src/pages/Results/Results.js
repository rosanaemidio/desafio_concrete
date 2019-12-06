import React, { Component, Fragment } from 'react'
import Search from '../../components/Search/Search'
import User from './components/User/User'
import Repositories from './components/Repositories/Repositories'
import { getUsers } from '../../services/api/users'
import { getRepos } from  '../../services/api/users'

import './Results.css'
class Results extends Component{
    constructor(){
        super()
        this.state = {
            value:'',
            error:'' ,           
            repos:[]
        }
    }
    componentDidMount(){   
        if(this.props.location.state){
            if(this.props.location.state.user)  {
                this.setState({
                    user: this.props.location.state.user,
                })
                this.getReposData(this.props.location.state.user.login)
                }  
                if(this.props.location.state.error){
                    this.setState({
                        error: 'Not found'
                })
            }
        }
    }


    searchRepos = () =>{
            getRepos().then(res => {
                this.setState({repos:res.data})
            })
     }
     
    render(){
        console.log(this.props)
        const { name, avatar_url, login, public_repos, following, followers, location, company } = this.props.location.state.user;
        return(   
            <Fragment>
                <div className='search__container'>
                    <Search 
                    classe='search__results'
                    change={this.valorInput}
                    click={this.searchUser}
                    />
                </div>    
                <div>
                    <section className='aside_result'>
                        <User
                        profile={avatar_url}
                        name={name}
                        login={login}
                        children = {followers}
                        children = {location}
                        children = {public_repos}
                        children = {following}
                        children = {company}
                        
                        />  
                    </section>
                    <section>
                        <Repositories />
                    </section>
                </div>               
            </Fragment>
        )
    }    
}
export default Results;