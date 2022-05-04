import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='loading'>
        <RotatingLines strokeColor='#000' height={550} width={80} />
    </div>
  )
}

export default Loading