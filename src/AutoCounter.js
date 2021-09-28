import React, { useEffect, useState } from 'react'

export default function AutoCounter() {
  const [count, setCount] = useState(0)

  // !Don't lie about deps array - this case it only runs this effect when count = 0
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(`Running interval for count = ${count}`)
  //     setCount(count + 1)
  //   }, 1000)

  //   return () => clearInterval(id)
  // }, [])

  // !First solution: always include state, props that you use inside the effect in the deps array
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log(`Running interval for count = ${count}`)
  //     setCount(count + 1)
  //   }, 1000)

  //   return () => clearInterval(id)
  // }, [count])

  // !Second solution: change our effect code so that it wouldn’t need a value that changes more often than we want
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return <h1>{count}</h1>
}
