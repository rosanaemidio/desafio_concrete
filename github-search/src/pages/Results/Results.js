import React, { Component, Fragment } from 'react'
import Search from '../../components/Search/Search'
import User from './components/User/User'
import Repositories from './components/Repositories/Repositories'
import { getRepos } from  '../../services/api/users'

import './Results.css'
class Results extends Component{
    constructor(){
        super()
        this.state = {
            repos:[]
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
                    />
                </div>                   
                <aside className='aside_result'>
                    <User
                    profile={avatar_url}
                    name={name}
                    login={login}
                    info = {followers}
                    info = {location}
                    info = {public_repos}
                    info = {following}
                    info = {company}
                    
                    />  

                </aside>
                <section>
                    <Repositories />
                </section>
            </Fragment>
        )
    }    
}
export default Results;