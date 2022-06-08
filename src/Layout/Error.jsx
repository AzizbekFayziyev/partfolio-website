import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <h1 className='mt-5 info text-center'>
        Page nothing Found Back To <Link to="/">Home</Link>
      </h1>
    </div>
  )
}
