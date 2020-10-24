import {
  START_REQUEST,
  USER_LOGIN_SUCCESS,
  REQUEST_FAIL,
  USER_LOGOUT,
  UPDATE_USER_PROFILE,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  error: null,
  user: null,
  success: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
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
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      }
    default:
      return state
  }
}
