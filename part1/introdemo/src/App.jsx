import React from 'react'
import './App.css'


const App = () => {
  const friends = [
    { name: 'Muireann', age: 36 },
    { name: 'BoJack', age: 3 },
  ]
  
  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App