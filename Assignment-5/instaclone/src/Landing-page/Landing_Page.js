import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing_Page() {
  const LinkingPage=function(){
    
   

  }
  return (
    <div className='Landing-Page'>
      <div className='Header'> 1</div>
        <div className='Landing-Image'>
            <img src='https://images.unsplash.com/photo-1536838599032-1c38c390ab50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTkzOTE0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>
       
        <div className='Entry-Point'>
            <p className='text'>10X Team 04</p>
            <Link to="/Postview" className='btn'>Enter</Link>
        </div>
        </div>
      
    </div>
  )
}

