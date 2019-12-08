import React from 'react'
import Username from '../User/Username/Username'
import Informations from '../User/Informations/Informations'
import Star from '../../../../assets/icons/star-icon.png'

import './Repositories.css'

const Repositories = props => {
    const {repoName, repoDescription, repoStargazersCount }  = props

        return(
            <main className='container_repos'>
                <Username
                    name= {repoName}
                    login= {repoDescription}
                    description_title='repos_title'
                    description_p='repos_p'/>
                <div className= 'star'>
                    <Informations
                    icon = {Star}
                    alt = 'organization icon'>
                    {repoStargazersCount} </Informations>
                </div>
            </main>
        )
    
}

export default Repositories
