import React, { useCallback, useEffect } from 'react'

// ! 2 - Solution 1
// if a function doesn’t use anything from the component scope, you can hoist it outside the component
// function getFetchUrl(query) {
//   return 'https://hn.algolia.com/api/v1/search?query=' + query
// }

export default function SearchMultiple() {
  // ! 1 - Probably that this function is regenerated every render
  // function getFetchUrl(query) {
  //   return 'https://hn.algolia.com/api/v1/search?query=' + query
  // }

  // useEffect(() => {
  //   const url = getFetchUrl('react')
  //   // ... Fetch data and do something ...
  //   console.log(url)
  // }, [getFetchUrl]) // 🚧 Deps are correct but they change too often

  // useEffect(() => {
  //   const url = getFetchUrl('redux')
  //   // ... Fetch data and do something ...
  //   console.log(url)
  // }, [getFetchUrl]) // 🚧 Deps are correct but they change too often

  // ! 2 - Solution 1
  // useEffect(() => {
  //   const url = getFetchUrl('react')
  //   // ... Fetch data and do something ...
  //   console.log(url)
  // }, [])

  // useEffect(() => {
  //   const url = getFetchUrl('redux')
  //   // ... Fetch data and do something ...
  //   console.log(url)
  // }, [])

  // ! 3 - Solution 3
  // ✅ Preserves identity when its own deps are the same
  const getFetchUrl = useCallback(query => {
    return 'https://hn.algolia.com/api/v1/search?query=' + query
  }, []) // ✅ Callback deps are OK

  useEffect(() => {
    const url = getFetchUrl('react')
    // ... Fetch data and do something ...
    console.log(url)
  }, [getFetchUrl]) // ✅ Effect deps are OK

  useEffect(() => {
    const url = getFetchUrl('redux')
    // ... Fetch data and do something ...
    console.log(url)
  }, [getFetchUrl]) // ✅ Effect deps are OK

  return <div>test</div>
}
