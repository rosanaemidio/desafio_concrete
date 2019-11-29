import React from 'react'

function Informations(props){
    const {icon, info} = props
    return(
        <div>
            <img src={icon}/>
            <p>{info}</p>
        </div>
    )
}
export default Informations