import React, { useEffect, useReducer /*, useState*/ } from 'react'

const initialState = {
  count: 0,
  step: 1
}

function reducer(state, action) {
  if (action.type === 'tick') {
    return {
      ...state,
      count: state.count + state.step
    }
  } else if (action.type === 'step') {
    return {
      ...state,
      step: action.step
    }
  } else {
    throw new Error('Action not defined')
  }
}

export default function CounterDep() {
  // const [count, setCount] = useState(0)
  // const [step, setStep] = useState(1)

  // ! If I want the interval clock to not reset on changes to the step?
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(c => c + step)
  //   }, 1000)
  //   return () => clearInterval(id)
  // }, [step])

  // ! If  you find yourself writing setSomething(something => ...), it’s a good time to consider using a reducer instead.
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])

  return (
    <>
      <h1>{count}</h1>
      {/* <input value={step} onChange={e => setStep(Number(e.target.value))} /> */}
      <input
        value={step}
        onChange={e =>
          dispatch({
            type: 'step',
            step: +e.target.value
          })
        }
      />
    </>
  )
}
