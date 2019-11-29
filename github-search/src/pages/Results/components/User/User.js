import React from 'react'
import Username from './Username/Username';
import Informations from './Informations/Informations';
import Avatar from './Avatar/Avatar'

function User (props) {
    return(
        
        <aside >
            <Avatar   />
            <Username  />
            <div>
                <Informations/>
            </div>
        </aside>
    )
}

export default User