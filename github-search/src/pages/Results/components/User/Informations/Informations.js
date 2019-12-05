import React from 'react'

function Informations(props){
    const {icon, children, alt, class_info} = props
    return(
        <div className='container__info'>
            <img src={icon} alt={alt} className={class_info}/>
            <p className='info_text'>{children}</p>
        </div>
    )
}
export default Informations