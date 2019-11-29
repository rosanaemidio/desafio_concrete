import React, { Component } from 'react'
import Username from '../User/Username/Username'
import Information from '../User/Informations/Informations'

import './Repositories.css'
class Repositories extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <main>
                <Username/>
                <Information/>
            </main>
        )
    }
}

export default Repositories
