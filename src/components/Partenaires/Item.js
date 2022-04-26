import React from 'react'
import './Partenaires.css'


const Item = ({ partner }) => {
  return (
    <div className='item-slide' >
      <a target="_blank" href={partner.url}>
        <img width={partner.width} src={partner.image} alt="logo" />
      </a>
    </div>
  )
}

export default Item