import React, { Fragment } from 'react'
import Search from '../../components/Search/Search'
import User from './components/User/User'
import Repositories from './components/Repositories/Repositories'

import './Results.css'
class Results extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(   
            <Fragment>
                <div className='search__container'>
                    <Search 
                    classe='search__results'
                    />
                </div>                   
                <section>
                    <User/>
                    <Repositories />
                </section>

            </Fragment>

        )
    }

}
export default Results;