import React from 'react'

function PersonList(names) {
  return (
    <div>
      {
        <li>{names.name}</li>
      }
    </div>
  )
}

export default PersonList
