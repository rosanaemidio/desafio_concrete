import React from 'react'

import './Input.css'
function Input(props){
    return(
        <input type='text' placeholder= ' Digite o nome do usuário' className='search__home' onChange={props.change}></input>
    )
}
export default Input