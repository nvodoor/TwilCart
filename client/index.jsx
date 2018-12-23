import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart.jsx';
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <div>
      <h1>TwilCart</h1>
      <Cart />
    </div>
  )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));