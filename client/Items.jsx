import React from 'react';

const Items = ({ img, description, name, price }) => {
  return (
    <div>
      <img src={img} />      
      <div>{description}</div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

export default Items;