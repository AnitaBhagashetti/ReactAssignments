import React from 'react'

export default function Content({data}) {
  return (
    <div className='Content'>
      <div className='image'>
        <img  className='img' src={data.PostImage} alt='img'/>
      </div>
      <div className='Post-Info'>
        <div className='buttons'>
        <img  className='like' src={data.LikesButton} alt="Like" />
        <img className='share' src={data.shareButton} alt="Share" />
        </div>
        <div className='Post-On'>
          <p>{data.date}</p>
        </div>
      </div>
      <div className='Likes'>
        <p className='Likes-Count'>{data.likes}Likes</p>
      </div>
      
    </div>
  )
}
