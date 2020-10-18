import axios from 'axios'
import {
  START_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_SUCCESS,
  REQUEST_FAIL,
} from '../constants/actionTypes'
import { BASE_URL } from '../constants/general'

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_REQUEST })

    const { data } = await axios(`${BASE_URL}/api/products`)

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data.message || error.message,
    })
  }
}

export const fetchDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_REQUEST })

    const { data } = await axios(`${BASE_URL}/api/products/${id}`)

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data.message || error.message,
    })
  }
}
