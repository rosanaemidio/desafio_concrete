import React from 'react'

import './Username.css'


function Username(props) {
    const { name,description_P, login,description_title}=props;
    return (
        <div>
            <h3 className = {description_title}>{name}</h3>
            <p className = {description_P}>{login}</p>
        </div>   
    )
}
export default Username