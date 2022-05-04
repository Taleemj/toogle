import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import { ResultContext } from '../contexts/ContextProvider'

const News = () => {
  const {Results, isLoading, getResults, searchTerm } = useContext(ResultContext)

  useEffect(() => {
      getResults(`news/q=${searchTerm}`)
  }, [searchTerm])
  

  if (isLoading) {
      return <Loading />
  }

  return (
    <div className='search-container'>
        {Results?.entries?.map((result)=>(
            <div key={result?.id} className='single-search'>
                <h5>{result?.source?.title}</h5>
                <a href={result?.link}>{ result.title}</a>
                <p>{result?.published}</p>
            </div>
                
        ))}
    </div>
  )
}

export default News