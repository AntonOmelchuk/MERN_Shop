import { CART_ADD_ITEM, CART_REMOVE_ITEM, SAVE_ADDRESS_DATA, SAVE_PAYMENT_METHOD } from '../constants/actionTypes'
import { addItemToCart } from '../helpers/utils'

const initialState = {
  cartItems: [],
  shippingAddress: {},
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
    case SAVE_ADDRESS_DATA:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    default:
      return state
  }
}
