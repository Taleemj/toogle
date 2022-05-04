import React from 'react'
import { Route, Routes } from 'react-router-dom'

import News from './News'
import Search from './Search'
import Images from './Images'
import Videos from './Videos'

const Pages = () => {
  return (
    <div className='routes-containers'>
      <Routes>
        <Route path='/' element={ <Search /> } />
        <Route path='/news' element={ <News /> } />
        <Route path='/images' element={ <Images /> } />
       <Route path='/videos' element={ <Videos /> } />
      </Routes>
    </div>
  )
}

export default Pages