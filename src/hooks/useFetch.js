import { useEffect, useState } from 'react'

const useFetch = (resource, options, forceReload) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(resource, options)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setError(null)
        setLoading(false)
      })
      .catch(err => {
        setError(`[App Error] ${err.message}`)
        setData([])
        setLoading(false)
      })
  }, [forceReload])

  return { data, error, loading }
}

export default useFetch
