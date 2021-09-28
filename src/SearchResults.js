import React, { useEffect, useState } from 'react'

export default function SearchResults() {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('react')

  // // Imagine this function is also long
  // function getFetchUrl() {
  //   return 'https://hn.algolia.com/api/v1/search?query=' + query
  // }

  // // Imagine this function is also long
  // async function fetchData() {
  //   const response = await fetch(getFetchUrl())
  //   const data = await response.json()
  //   setData(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, []) // Is this okay?

  useEffect(() => {
    function getFetchUrl() {
      return 'https://hn.algolia.com/api/v1/search?query=' + query
    }

    async function fetchData() {
      const response = await fetch(getFetchUrl())
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [query])

  return <div>{JSON.stringify(data)}</div>
}
