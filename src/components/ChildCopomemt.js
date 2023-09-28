import React from 'react'

 function ChildCopomemt(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Greet</button>
    </div>
  )
}export default ChildCopomemt
