import React, { Fragment } from 'react'
import Input from  '../Input/Input'
import Button from '../Button/Button'

import './Search.css'

function Search(props){

    return(
        <div className={props.classe}>
            
            <h1>GITHUB Search</h1>
            <div className='search__div'> 
                <Input />
                <Button />
            </div>
        </div>
    )


}
export default Search