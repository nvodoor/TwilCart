import React from 'react';
import { updateNewUser, updateNewPassword, leaveSignUp, createUser, addNumber } from './redux/actions.js';
import { connect } from 'react-redux';

import './signin.css';

const SignUser = ({ newUser, newPassword, newNumber, leaveSignUp, updateNewUser, updateNewPassword, createUser, addNumber}) => {
  return (
    <div className='signin-form'>
      <h3>Please Sign Up Here:</h3>
      <label>Enter Username:</label>
      <input type="text" className='signin-input' value={newUser} onChange={updateNewUser}></input>
      <label>Enter Password:</label>
      <input type="text" className='signin-input'value={newPassword} onChange={updateNewPassword}></input>
      <label>Enter Number:</label>
      <input type="text" className='signin-input' value={newNumber} onChange={addNumber}></input>
      <button type="text" className='signin-button' onClick={leaveSignUp}>Leave Page</button>
      <button type="text" className='signin-button' onClick={createUser}>Create User</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    newUser: state.newUser,
    newPassword: state.newPassword,
    newNumber: state.newNumber,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    leaveSignUp: () => {
      dispatch(leaveSignUp())
    },
    updateNewUser: (e) => {
      dispatch(updateNewUser(e))
    },
    updateNewPassword: (e) => {
      dispatch(updateNewPassword(e))
    },
    addNumber: (e) => {
      dispatch(addNumber(e))
    },
    createUser: () => {
      dispatch(createUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUser);
