import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

export default function Post({data}) {
  return (
    
        
    <div className='main'>
        <Header data={data} />
        <Content  data={data} />
        <Footer  data={data} />
        
      
    
    </div>
  )
}

