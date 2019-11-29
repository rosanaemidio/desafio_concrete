import React from 'react'
import  icone from '../../assets/icons/Search-Icon.png'

import './Button.css'

function Button(props){
    return(
            <button className='btn__search' onClick={props.click}><img className='btn__search-icone' src={icone}/>
            </button>
    )
}
export default Button