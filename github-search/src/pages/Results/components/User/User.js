import React, { Fragment } from 'react'
import Username from './Username/Username';
import Informations from './Informations/Informations';
import Avatar from './Avatar/Avatar'
import followers from '../../../../assets/icons/followers-icon.png'
import location from '../../../../assets/icons/location -con.png'
import star from '../../../../assets/icons/star-icon.png'
import organization from '../../../../assets/icons/organization-icon.png'
import repositorie from '../../../../assets/icons/repositorie-icon.png'

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
                alt={props.alt}
                children = {props.children}
                />
                 <Informations
                icon = {star}
                alt={props.alt}
                children = {props.children}
                />
                 <Informations
                icon = {location}
                alt ={props.alt}
                children = {props.children}
                />
                 <Informations
                icon = {organization}
                alt = {props.alt}
                children = {props.children}
                />
                  <Informations
                icon = {repositorie}
                alt ={props.alt}
                children = {props.children}
                />
            </div>
        </Fragment>
    )
}

export default User