import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/actionTypes'
import { addItemToCart } from '../helpers/utils'

const initialState = {
  cartItems: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload, action.noPlus),
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}
