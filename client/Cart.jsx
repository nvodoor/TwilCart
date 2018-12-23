import React from 'react';
import Items from './Items.jsx';
import { addCart, removeCart } from './redux/actions.js';
import { connect } from 'react-redux';

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { items } = this.props
    return (
      <div>
        <h3>These are the items to buy:</h3>
        <ul>
          {items.map((item) => {
            return <li>
              <Items img={item.img} description={item.description} name={item.name} price={item.price} cart={item.cart}/>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
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