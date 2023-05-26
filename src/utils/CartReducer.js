export const ADD_TO_CART = 'add-to-cart'
export const REMOVE_FROM_CART = 'remove-from-cart'

export default function (state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return { ...state, [action.id]: action.state, }
    }
    case REMOVE_FROM_CART: {
      return { ...state, [action.id]: undefined, }
    }
    default: {

    }
  }
}
