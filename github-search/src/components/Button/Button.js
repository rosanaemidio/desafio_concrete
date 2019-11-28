import React from 'react'
import  icone from '../../assets/icons/Search-Icon.png'

import './Button.css'

function Button(){
    return(
            <button type='img' placeholder='Digite o nome do Repositório aqui'className='btn__search' ><img className='btn__search-icone' src={icone}/>
            </button>
    )
}
export default Button