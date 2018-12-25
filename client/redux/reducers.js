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
  ],
  signup: 'no',
  newUser: '',
  newPassword: '',
  user: '',
  password: '',
  loginPage: false,
  loggedIn: 'no'
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
      const { description } = action.payload;
      let newItems = [...state.items];
      for (let i = 0; i < newItems.length; i++) {
        if (description === newItems[i].description) {
          newItems[i].cart--;
        }
      }
      return {
        ...state,
        items: newItems
      }
    }
    case 'SIGN_UP': {
      const { signup } = action.payload;
      return {
        ...state,
        signup: signup
      }
    }
    case 'LEAVE_SIGN_UP': {
      const { signup } = action.payload;
      return {
        ...state,
        signup: signup
      }
    }
    case 'CREATE_USER': {
      const { newUser } = action.payload;
      return {
        ...state,
        newUser: newUser
      }
    }
    case 'CREATE_PASSWORD': {
      const { newPassword } = action.payload;
      return {
        ...state,
        newPassword: newPassword
      }
     }
     case 'CREATE_NEW_USER': {
       const info = {
         username: state.newUser,
         password: state.newPassword
       }
       fetch('/signup', {
         method: 'POST',
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(info)
       })
       .then(res => console.log(res))
       .catch(err => console.log(err));
     }
     case '_USER': {
       const { user } = action.payload;
       return {
         ...state,
         user: user
       }
     }
     case '_PASSWORD': {
       const { password } = action.payload;
       return {
         ...state,
         password: password
       }
     }
     case 'LOGIN_PAGE': {
       const { loginPage } = action.payload;
       return {
         ...state,
         loginPage: loginPage
       }
     }
    case 'LEAVE_LOGIN_PAGE': {
      const { loginPage } = action.payload;
      return {
        ...state,
        loginPage: loginPage
      }
    }
     case 'USE_SITE': {
       return {
         ...state,
         loggedIn: 'yes',
         loginPage: false
       }
     }
    default:
      return state 
  }
}