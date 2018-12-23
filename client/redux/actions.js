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