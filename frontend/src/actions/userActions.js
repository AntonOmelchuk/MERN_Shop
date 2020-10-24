import axios from 'axios'
import {
  START_REQUEST,
  USER_LOGIN_SUCCESS,
  REQUEST_FAIL,
  USER_LOGOUT,
  UPDATE_USER_PROFILE,
} from '../constants/actionTypes'
import { BASE_URL } from '../constants/general'

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: START_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(`${BASE_URL}/api/users/login`, { email, password }, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data.message || error.message,
    })
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('user')

  dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async dispatch => {
  dispatch({ type: START_REQUEST })
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(`${BASE_URL}/api/users`, { name, email, password }, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data.message || error.message,
    })
  }
}

export const getUserProfile = () => async (dispatch, getState) => {
  dispatch({ type: START_REQUEST })

  try {
    const {
      user: { user },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    const { data } = await axios.get(`${BASE_URL}/api/users`, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data.message || error.message,
    })
  }
}

export const updateUserProfile = (name, email, password) => async (dispatch, getState) => {
  dispatch({ type: START_REQUEST })
  try {
    const {
      user: { user },
    } = getState()
    console.log('token: ', user.token)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    const { data } = await axios.put(`${BASE_URL}/api/users/profile`, { name, email, password }, config)

    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: data,
    })

    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: REQUEST_FAIL,
      payload: error?.response?.data.message || error.message,
    })
  }
}
