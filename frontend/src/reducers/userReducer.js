import {
  START_REQUEST,
  USER_LOGIN_SUCCESS,
  REQUEST_FAIL,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  error: undefined,
  user: undefined,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case (USER_LOGIN_SUCCESS, USER_REGISTER_SUCCESS):
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: undefined,
      }
    default:
      return state
  }
}
