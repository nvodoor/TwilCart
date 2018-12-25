import React from 'react';
import Items from './Items.jsx';
import SignUser from './SignUser.jsx';
import { addCart, removeCart, signUp } from './redux/actions.js';
import { connect } from 'react-redux';


import './cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  renderView() {
    const { items, signup, signUp } = this.props

    if (signup === 'yes') {
      return <SignUser />
    } else {
      return <div><h3>These are the items to buy:</h3>
        <ul className='ulist'>
          {items.map((item) => {
            return <li className='list'>
              <Items img={item.img} description={item.description} name={item.name} price={item.price} cart={item.cart} />
            </li>
          })}
        </ul>
        <button type="text" onClick={signUp}>Sign Up</button>
      </div>
    }
  }

  render() {

    return (
      <div className='display'>
        {this.renderView()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    signup: state.signup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCart: (e) => {
      dispatch(addCart(e))
    },
    removeCart: (e) => {
      dispatch(removeCart(e))
    },
    signUp: () => {
      dispatch(signUp())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);