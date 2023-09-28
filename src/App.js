// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

import NameList from './components/NameList';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Hello</h1>
   {/* <Greet name = "Asfand"/>
   <Greet name = "Yar"/>
   <Welcome name = "Asfand">
    <h3>How are You</h3> */}
    <Welcome/>
   {/* <Hello/> */}
   {/* <Message/> */}
   {/* <Counter/> */}
   {/* <FunctionClick/> */}
   {/* <EventBind/> */}
   {/* <ParentComponent/> */}
{/* <UserGreeting/> */}
{/* <NameList/> */}
 
    </div>
  )
  }
}

export default App;
