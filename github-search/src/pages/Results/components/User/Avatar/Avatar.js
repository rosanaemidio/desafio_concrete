import React from 'react'

function Avatar(props){
    return(
        <div className='avatar'>
            <img src={props.profile}/>
        </div>

    )
}
export default Avatar