import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const cartLocalStorage = localStorage.getItem('cartItems')

const initialState = {
  cart: {
    cartItems: cartLocalStorage ? JSON.parse(cartLocalStorage) : [],
  },
}

const middlewares = [thunk]

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
)
