export const addCart = e => ({
    type: 'ADD_CART',
    payload: {
      name: e.target.id
    }
})

export const removeCart = e => ({
  type: 'REMOVE_CART',
  payload: {
    description: e.target.id
  }
})

export const signUp = () => ({
  type: 'SIGN_UP',
  payload: {
    signup: 'yes'
  }
})

export const leaveSignUp = () => ({
  type: 'LEAVE_SIGN_UP',
  payload: {
    signup: 'no'
  }
})

export const updateNewUser = (e) => ({
  type: 'CREATE_USER',
  payload: {
    newUser: e.target.value
  }
})

export const updateNewPassword = (e) => ({
  type: 'CREATE_PASSWORD',
  payload: {
    newPassword: e.target.value
  }
})

export const createUser = () => ({
  type: 'CREATE_NEW_USER'
})

export const updateUser = (e) => ({
  type: '_USER',
  payload: {
    user: e.target.value
  }
})

export const updatePassword = (e) => ({
  type: '_PASSWORD',
  payload: {
    password: e.target.value
  }
})

export const loginUser = (username, password) => {
    return (dispatch) => {
      fetch(`/login?username=${username}&password=${password}`)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          dispatch(useSite())
        })
    } 
}

export const login = () => ({
  type: 'LOGIN_PAGE',
  payload: {
    loginPage: 'yes'
  }
})

export const leaveLogin = () => ({
  type: 'LEAVE_LOGIN_PAGE',
  payload: {
    loginPage: false
  }
})

export const useSite = () => ({
  type: 'USE_SITE'
})

export const orderGoods = () => ({
  type: 'ORDER_GOODS'
})

export const addNumber = (e) => ({
  type: 'ADD_NUMBER',
  payload: {
    number: e.target.value
  }
})