import React from 'react'

export default function Header({data}) {
  return (
    <div className='Header'>
        <div className='Info'>
            <p className='Name'>{data.name}</p>
            <p className='Location'>{data.location}</p>

        </div>
        <div className='MoreInfo'>...</div>
      
    </div>
  )
}
