export const addItemToCart = (cart, item, noPlus = false) => {
  const newCart = [...cart]
  const existsIdx = newCart.findIndex((cartItem) => cartItem.id === item.id)

  if (existsIdx >= 0) {
    const newQty = Number.parseInt(newCart[existsIdx].qty) + Number.parseInt(item.qty)

    newCart[existsIdx].qty = noPlus ? item.qty : newQty
    return newCart
  } else {
    return [...cart, item]
  }
}
