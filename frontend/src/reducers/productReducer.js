import {
  START_REQUEST,
  PRODUCT_LIST_SUCCESS,
  REQUEST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  error: undefined,
  products: [],
  details: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      }
    default:
      return state
  }
}
