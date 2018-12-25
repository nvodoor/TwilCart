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