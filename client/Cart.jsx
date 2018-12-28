import React from 'react';
import Items from './Items.jsx';
import SignUser from './SignUser.jsx';
import LoginUser from './LoginUser.jsx';
import { addCart, removeCart, signUp, login, orderGoods } from './redux/actions.js';
import { connect } from 'react-redux';


import './cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  renderView() {
    const { items, signup, signUp, loginPage, loggedIn, user, login, orderCart } = this.props
    if (signup === 'yes') {
      return <SignUser />
    } else {
      if (!loginPage) {
        if (loggedIn === 'no') {
          return <div><h3>These are the items to buy:</h3>
            <ul className='ulist'>
              {items.map((item) => {
                return <li className='list'>
                  <Items img={item.img} description={item.description} name={item.name} price={item.price} cart={item.cart} />
                </li>
              })}
            </ul>
            <button type="text" onClick={signUp}>Sign Up</button>
            <button type="text" onClick={login}>Login</button>
          </div>
        } else {
          return <div>
            <h2>Welcome: {user}</h2>
            <h3>These are the items to buy:</h3>
            <ul className='ulist'>
              {items.map((item) => {
                return <li className='list'>
                  <Items img={item.img} description={item.description} name={item.name} price={item.price} cart={item.cart} />
                </li>
              })}
            </ul>
            <button type="text" onClick={orderCart}>Order Goods</button>
          </div>
        }
      } else if (loginPage) {
        return <LoginUser />
      } 
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
    signup: state.signup,
    loginPage: state.loginPage,
    user: state.user,
    loggedIn: state.loggedIn
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
    },
    login: () => {
      dispatch(login())
    },
    orderCart: () => {
      dispatch(orderGoods())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);