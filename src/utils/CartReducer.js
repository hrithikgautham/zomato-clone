export const ADD_TO_CART = 'add-to-cart'
export const REMOVE_FROM_CART = 'remove-from-cart'
export const CLEAR_CART = 'clear-cart'

export default function (state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state.filter(item => action.id != item.id), action.state,];
    }
    case REMOVE_FROM_CART: {
      return state.filter(item => action.id != item.id)
    }
    case CLEAR_CART: {
      return []
    }
    default: {

    }
  }
}
