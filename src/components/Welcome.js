import React, {Component} from 'react';
import './MyStyles.css'

class Welcome extends Component{
    render() {
        return <div>
                    <h1 className = 'primary' > Hello This is DevOps Task 4{this.props.name}</h1> {this.props.children}
                </div>
         
    }
}

export default Welcome