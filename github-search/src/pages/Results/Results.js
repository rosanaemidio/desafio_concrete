import React, { Component, Fragment } from 'react'
import Search from '../../components/Search/Search'
import Usuario from './components/User/Usuario'
import Repositories from './components/Repositories/Repositories'
import { getRepos } from  '../../services/api/users'

import './Results.css'
class Results extends Component{
    constructor(){
        super()
        this.state={
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
        const { name, avatar_url, login } = this.state.user;
        return(   
            <Fragment>
                <div className='search__container'>
                    <Search 
                    classe='search__results'
                    />
                </div>                   
                <aside className=''>
                    <Usuario
                    profile={avatar_url}
                    name={name}
                    login={login}/>             
                </aside>
                <section>
                    <Repositories />
                </section>
            </Fragment>
        )
    }    
}
export default Results;