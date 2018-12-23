import React from 'react';
import { connect } from 'react-redux';
import { addCart, removeCart } from './redux/actions.js';

const Items = ({ img, description, name, price, cart, addCart, removeCart }) => {
  return (
    <div>
      <img src={img} />      
      <div>{description}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{cart}</div>
      <button type='text' id={name} onClick={addCart}>Add to Cart</button>
      <button type='text' id={description} onClick={removeCart}>Remove from Cart</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addCart: (e) => {
      dispatch(addCart(e))
    },
    removeCart: (e) => {
      dispatch(removeCart(e))
    }
  }
}

export default connect(null, mapDispatchToProps)(Items);