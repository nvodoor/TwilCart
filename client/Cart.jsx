import React from 'react';
import Items from './Items.jsx';
import { addCart, removeCart, signUp, leaveSignUp } from './redux/actions.js';
import { connect } from 'react-redux';

import './cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { items, signup, newUser, newPassword } = this.props

    let display;

    if (signup === 'yes') {
      display = <div>
        <h3>Please Sign Up Here:</h3>
        <label>Enter Username:</label>
        <input type="text" value={newUser}></input>
        <input type="text" value={newPassword}></input>
      </div>
    } else {
      display = <div><h3>These are the items to buy:</h3>
        <ul className='ulist'>
          {items.map((item) => {
            return <li className='list'>
              <Items img={item.img} description={item.description} name={item.name} price={item.price} cart={item.cart} />
            </li>
          })}
        </ul>
        </div>
    }

    return (
      <div className='display'>
        {display}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    signup: state.signup,
    newUser: state.newUser,
    newPassword: state.newPassword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCart: (e) => {
      dispatch(addCart(e))
    },
    removeCart: (e) => {
      console.log(e.target.id);
      dispatch(removeCart(e))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);