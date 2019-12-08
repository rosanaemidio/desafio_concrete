import React, { Component, Fragment } from 'react'
import Search from '../../components/Search/Search'
import User from './components/User/User'
import Repositories from './components/Repositories/Repositories'
import NotFound from '../../components/NotFoud'
import { getRepos, getUsers } from  '../../services/api/users'

import './Results.css'
class Results extends Component{
    constructor(){
        super()
        this.state = {
            value:'',
            user: {},
            repos:[],
            error: ''
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


    componentDidMount(){   
        if(this.props.location.state){
            if(this.props.location.state.user)  {
                this.searchRepos(this.props.location.state.user.login)
                this.setState({
                    user: this.props.location.state.user,
                    error: ''
                })
            }  
            if(this.props.location.state.error){
                    this.setState({
                        user:'',
                        error: 'User not found'
                })
            }
        }
    }  

    valueInput = (value) => {
        this.setState({value: value.target.value})
    }
    
    getUser = (value) => {
        getUsers(value)
        .then(response => {
            this.setState({
                user: response.data,
                error:''
            })   
        })
        .catch((err) => {
            this.setState({
                error: 'Not found'
            })
        })
    }
    
    searchRepos = (value) =>{
            getRepos(value).then(res => {
                this.setState({repos:res.data})
            })
            .catch((err) =>{                
            })
     }

     searchUser = (value) =>{
        this.getUser(this.state.value);
        this.searchRepos(this.state.value);
    }


    render(){
        const { name, avatar_url, login, public_repos, following, followers, location, company } = this.state.user;
        // const repos = this.state.repos
        const error = this.state.error

        return(   
            <Fragment>
                    <Search 
                    classe='search__results'
                    change={this.valueInput}
                    click={this.searchUser}
                    />                  
                {!error ?
                <main className='container_results'>

                        <User
                        profile={avatar_url}
                        name={name}
                        login={login}
                        info = {company}
                        info = {location}
                        info = {following}
                        info = {public_repos}
                        info = {followers}
                        />  
                        <div className='container_repo'>
                            {this.state.repos.sort((a, b) => b.stargazers_count - a.stargazers_count).map(repo =>                    
                                <Fragment  key= {repo.id}>
                                <Repositories
                                repoName = {repo.name}
                                repoDescription={repo.description}
                                repoStargazersCount={repo.stargazers_count}            
                                />          
                                                        
                                </Fragment>                  
                             )}                      
                        </div>
                </main>
                : <NotFound classnotFound = 'notFound' />
                }           
            </Fragment>
        )
    }    
}
export default Results;