import React from 'react'


function Username(props){
    const {name,login}=props;
    return(
        <div>
            <h3>{name}</h3>
            <p>{login}</p>
        </div>   
    )
}
export default Username