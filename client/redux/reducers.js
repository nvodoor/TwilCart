import { addCart, removeCart } from './actions.js';

const initialState = {
  items: [
    {
      img: 'https://s3-us-west-1.amazonaws.com/nvodoor-images/brownie.jpeg',
      description: 'Delicious Brownies from the Hollow End',
      name: 'Brownies',
      price: 5.00,
      cart: 0
    },
    {
      img: 'https://s3-us-west-1.amazonaws.com/nvodoor-images/cupcake.jpeg',
      description: 'Excellent Cupcakes from the Secret Cabin',
      name: 'Cupcakes',
      price: 3.00,
      cart: 0
    },
    {
      img: 'https://s3-us-west-1.amazonaws.com/nvodoor-images/donut.jpeg',
      description: 'Gourmet Donut from Noodle Donuts',
      name: 'Donuts',
      price: 4.00,
      cart: 0
    },
    {
      img: 'https://s3-us-west-1.amazonaws.com/nvodoor-images/pineapple.jpeg',
      description: 'Mundane Pineapples from the Deli Wrap',
      name: 'Pineapples',
      price: 6.00,
      cart: 0
    },
    {
      img: 'https://s3-us-west-1.amazonaws.com/nvodoor-images/pizza.jpeg',
      description: 'Yummalicious Pizza',
      name: 'Pizza',
      price: 12.00,
      cart: 0
    },
    {
      img: 'https://s3-us-west-1.amazonaws.com/nvodoor-images/salmon.jpeg',
      description: 'Cooked Wild Salmon',
      name: 'Salmon',
      price: 15.00,
      cart: 0
    },
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CART': {
      const { name } = action.payload;
      let newItems = [...state.items];
      for (let i = 0; i < newItems.length; i++) {
        if (name === newItems[i].name) {
          newItems[i].cart++;
        }
      }
      return {
        ...state,
        items: newItems
      }
    }
    case 'REMOVE_CART': {
      const { name } = action.payload;
      let newItems = [...state.items];
      for (let i = 0; i < newItems.length; i++) {
        if (name === newItems[i].name) {
          newItems[i].cart--;
        }
      }
      return {
        ...state,
        items: newItems
      }
    }
    default:
      return state 
  }
}