import React from 'react'
import Username from './Username/Username';
import Informations from './Informations/Informations';
import Avatar from './Avatar/Avatar'

class User extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <aside>
                <Avatar />
                <Username />
                <Informations/>
            </aside>
        )
    }
}

export default User