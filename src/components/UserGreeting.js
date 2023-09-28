import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: false
        }
    }

  render() {
    let message
    if(this.state.isLoggedIn){
        message =  <div> Logged In</div>
    }
    else{
        message  = <div> Not Logged In</div>
    }
    return <div>{message}</div>
  }
}

export default UserGreeting
