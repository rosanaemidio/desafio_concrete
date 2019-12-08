import React from 'react'

import './Informations.css' 

function Informations(props){
    const {icon, children, alt, class_icon} = props
    return(
        <div className='container__icon'>
            <img src={icon} alt={alt} className={class_icon}/>
            <p className='icon__text'>{children}</p>
        </div>
    )
}
export default Informations