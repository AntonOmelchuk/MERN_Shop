import { CART_ADD_ITEM } from '../constants/actionTypes'
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
    default:
      return state
  }
}
