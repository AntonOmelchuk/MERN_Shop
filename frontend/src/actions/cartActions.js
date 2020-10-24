import { CART_ADD_ITEM, CART_REMOVE_ITEM, SAVE_ADDRESS_DATA } from '../constants/actionTypes'
import axios from 'axios'
import { BASE_URL } from '../constants/general'

export const addItemToCart = (id, qty, callback, noPlus) => async (dispatch, getState) => {
  const { data, error } = await axios.get(`${BASE_URL}/api/products/${id}`)

  if (error) {
    return console.log('error: ', error)
  }

  const { _id, name, image, price, countInStock } = data
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: _id,
      name,
      image,
      price,
      countInStock,
      qty,
    },
    noPlus,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  if (callback) callback()
}

export const removeCartItem = id => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = data => async dispatch => {
  dispatch({ type: SAVE_ADDRESS_DATA, payload: data })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}
