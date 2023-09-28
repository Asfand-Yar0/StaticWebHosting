import React, { Component } from 'react'

 class EventBind extends Component {

constructor(){
    super()
    this.state = {
        msg: "HELLO"
    }

    // this.clickhandler = this.clickhandler.bind(this)
}


// clickhandler(){
//     this.setState ({
//         msg:"Bye Bye"
//     })
// }

clickhandler = () => {
    this.setState ({
        msg:"Bye Bye"
    })
}



  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>Message</button> */}
        {/* <button onClick={() => this.clickhandler()}>Message</button> */}
        <button onClick = {this.clickhandler} > Message </button>
      </div>
    )
  }
}

export default EventBind
