import React, { useEffect, useState } from 'react';
import Post from './Post/Post';

import './Postview.css';
const Postview=()=> {
const [page, Setpage]=useState([0]);
const getData = async() => {
  const response = await fetch('http://localhost:3004/user');
  const data = await response.json();
  Setpage(data);

};
useEffect(()=>{
  getData();
},[])



  return (
    <div className='Instagram'>
      <hr/>
      <div className='Nav'>
        <img className='inst-icona' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' alt='inst-icon'/>

            <p>InstaClone</p>
            <img className='camera' src='https://www.kindpng.com/picc/m/49-497665_instagram-camera-icon-png-image-free-download-searchpng.png'  alt='camera'/>

        </div>
        <hr/>

        <div className="site-container">
      {
        page.map((data,index)=>(
          
         <Post data={data} key={index} />
        
      
         
        ))
        }
      </div>


      
      
  </div> 
  )
}

      

export default Postview;





  