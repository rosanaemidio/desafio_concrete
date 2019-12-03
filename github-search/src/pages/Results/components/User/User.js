import React from 'react'
import Username from './Username/Username';
import Informations from './Informations/Informations';
import Avatar from './Avatar/Avatar'
import followers from '../../../../assets/icons/followers-icon.png'

function User (props) {
    
    return(
        
        <aside >
            <Avatar  
            profile = {props.profile} />
            <Username  />
            <div>
                <Informations
                icon = {followers}
                info = {props.info}
                />
                 <Informations
                icon = {}
                info = {props.info}
                />
                 <Informations
                icon = {followers}
                info = {props.info}
                />
                 <Informations
                icon = {followers}
                info = {props.info}
                />
            </div>
        </aside>
    )
}

export default User