import React, {Component} from 'react';


class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }


    Increment(){
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("State" , this.state.count)
        })
    }

    render() {
        return( 
        <div>
            count- {this.state.count}<br/>
            <button onClick = {() => this.Increment()}> increment </button>
        </div>
        )
    }
}

export default Counter