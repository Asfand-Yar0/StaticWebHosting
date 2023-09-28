import React, { Component } from 'react'
import ChildCopomemt from './ChildCopomemt'

 class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            greet: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childname){
        alert( `hello ${this.state.greet} From ${childname}`)
    }

  render() {
    return (
      <div>
        <ChildCopomemt greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
