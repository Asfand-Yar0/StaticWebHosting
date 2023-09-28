import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const names = ["Goku", "Vegeta", "Krilin"]
    // const namelist =  names.map(name => <li>{name}</li>)  
  return (
    <div>
      {
        // names.map(name => <PersonList name = {name}/>)
        names.map((name,index) => <li key={index}>{index} {name}</li>)   
        // {namelist} 
      }
    </div>
  )
}

export default NameList
