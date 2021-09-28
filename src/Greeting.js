import React, { useEffect, useState } from 'react'

export default function Greeting({ name }) {
  const [count, setCounter] = useState(0)

  useEffect(() => {
    console.log('running useEffect')
    document.title = 'Hello, ' + name
  }, [name])

  return (
    <h1 className="Greeting">
      Hello, {name}
      <button onClick={() => setCounter(count + 1)}>Increment</button>
    </h1>
  )
}
