import React from 'react'
import './Avatar.css'

function Avatar(props){
    return(
            <img src={props.profile} className='avatar' alt='foto do usuário'/>

    )
}
export default Avatar