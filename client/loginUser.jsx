import React from 'react';
import { updateUser, updatePassword, loginUser, leaveLogin } from './redux/actions.js';
import { connect } from 'react-redux';

const Login = ({user, password, updateUser, updatePassword, loginUser, leaveLogin, loggedIn }) => {
  if (loggedIn === 'no') {
    return (
      <div>
        <h3>This is the Login Page:</h3>
        <input type="text" onChange={updateUser} value={user} />
        <input type="text" onChange={updatePassword} value={password} />
        <button type="text" onClick={loginUser} id='login' data-user={user} data-password={password}>Login</button>
        <button type="text" onClick={leaveLogin}>Go Back</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    password: state.password,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (e) => {
      dispatch(updateUser(e))
    },
    updatePassword: (e) => {
      dispatch(updatePassword(e))
    },
    loginUser: () => {
      const login = document.getElementById('login');
      dispatch(loginUser(login.dataset.user, login.dataset.password))
    },
    leaveLogin: () => {
      dispatch(leaveLogin())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);