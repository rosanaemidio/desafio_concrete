import React from 'react'

class User extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        const{img, name, title} = props;
        return(
            <section>
                <div>
                    <img src={img}></img>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
                <div>
                    <img></img>
                    <p></p>
                </div>
            </section>
        )
    }
}

export default Users