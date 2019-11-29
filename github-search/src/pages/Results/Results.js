import React, { Fragment } from 'react'
import Search from '../../components/Search/Search'
import User from './components/User/User'
import Repositories from './components/Repositories/Repositories'
import { getRepos } from  '../../services/api/users'

import './Results.css'
class Results extends React.Component{
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
    render() {
        console.log(this.props)
        // const { login, name, avatar_url } = this.state.user;
        return(   
            <Fragment>
                <div className='search__container'>
                    <Search 
                    classe='search__results'
                    />
                </div>                   
                <section className=''>
                    <User/>
                    <Repositories />
              
                </section>
            </Fragment>
        )
    }
    

}
export default Results;