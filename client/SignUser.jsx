import React from 'react';
import { updateNewUser, updateNewPassword, leaveSignUp, createUser } from './redux/actions.js';
import { connect } from 'react-redux';

const SignUser = ({ newUser, newPassword, leaveSignUp, updateNewUser, updateNewPassword, createUser}) => {
  return (
    <div>
      <h3>Please Sign Up Here:</h3>
      <label>Enter Username:</label>
      <input type="text" value={newUser} onChange={updateNewUser}></input>
      <label>Enter Password:</label>
      <input type="text" value={newPassword} onChange={updateNewPassword}></input>
      <button type="text" onClick={leaveSignUp}>Leave Page</button>
      <button type="text" onClick={createUser}>Create User</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    newUser: state.newUser,
    newPassword: state.newPassword
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
    createUser: () => {
      dispatch(createUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUser);
