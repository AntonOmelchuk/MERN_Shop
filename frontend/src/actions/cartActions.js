import { CART_ADD_ITEM } from '../constants/actionTypes'
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
