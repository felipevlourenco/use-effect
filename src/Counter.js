import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  // function handleAlertClick() {
  //   setTimeout(() => {
  //     alert('You clicked on: ' + count)
  //   }, 3000)
  // }

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`)
    }, 3000)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* <button onClick={handleAlertClick}>Show alert</button> */}
    </div>
  )
}
