import React from 'react'
import Search from '../../components/Search/Search'

import './Results.css'
class Results extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(   
            <div className='search__container'>
                <Search 
                   classe='search__results'
               />
            </div>                   

        )
    }

}
export default Results;