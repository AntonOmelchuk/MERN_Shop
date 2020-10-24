import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const cartLocalStorage = localStorage.getItem('cartItems')
const userLocalStorage = localStorage.getItem('user')
const shippingLocalStorage = localStorage.getItem('shippingAddress')

const initialState = {
  cart: {
    cartItems: cartLocalStorage ? JSON.parse(cartLocalStorage) : [],
    shippingAddress: shippingLocalStorage ? JSON.parse(shippingLocalStorage) : {},
  },
  user: {
    user: userLocalStorage ? JSON.parse(userLocalStorage) : undefined,
  },
}

const middlewares = [thunk]

export default createStore(rootReducer, initialState, applyMiddleware(...middlewares))
