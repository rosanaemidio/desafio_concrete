import React, { Fragment } from 'react'
import Username from './Username/Username';
import Informations from './Informations/Informations';
import Avatar from './Avatar/Avatar'
import followers from '../../../../assets/icons/followers-icon.png'
import location from '../../../../assets/icons/location -con.png'
import star from '../../../../assets/icons/star-icon.png'

function User (props) {
    
    return(
        
        <Fragment >
            <Avatar  
            profile = {props.profile} />
            <Username  
            name={props.name} 
            login={props.login}/>
            <div>
                <Informations
                icon = {followers}
                info = {props.info}
                />
                 <Informations
                icon = {star}
                info = {props.info}
                />
                 <Informations
                icon = {location}
                info = {props.info}
                />
                 {/* <Informations
                icon = {followers}
                info = {props.info}
                /> */}
            </div>
        </Fragment>
    )
}

export default User