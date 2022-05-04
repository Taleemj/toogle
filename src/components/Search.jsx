import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import { ResultContext } from '../contexts/ContextProvider'

const Search = () => {
    const {Results, isLoading, getResults, searchTerm } = useContext(ResultContext)

    useEffect(() => {
        getResults(`search/q=${searchTerm}&num=40`)
    }, [searchTerm])
    

    if (isLoading) {
        return <Loading />
    }

  return (
    <div className='search-container'>
        {Results.results?.map((result,index)=>(
            <div key={index} className='single-search'>
                <h5>{ result.link.length > 35 ? result.link.substring(0,35) :result.link}</h5>
                <a href={result.link} target='_blank' rel='noreferrer'><h4>{result.title}</h4></a>
                <p>{result.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Search