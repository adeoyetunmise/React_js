import React from 'react'

const Card = ({image, name, email, quote}) => {
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <div className="card-body"> 
            <h2>{name}</h2>
            <p className='email'>{email}</p>
            <p className='txt'>{quote}</p>
        </div>
    </div>
  )
}

export default Card