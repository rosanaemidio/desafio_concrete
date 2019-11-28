import React, { Fragment } from 'react'
import Input from  '../Input/Input'
import Button from '../Button/Button'

import './Search.css'

function Search(props){

    return(
        <div className={props.classe}>           
            <h1>Github <span>Search</span></h1>
            <div className='search__div'> 
                <Input />
                <Button />
            </div>
        </div>
    )


}
export default Search