import { CartContext } from './cart-context'
import { useReducer } from 'react'
import { cobaCookie } from './cookies'
type Action =
  | {
      type: 'ADD'
      payload: {
        id: number
        data: object[]
      }
    }
  | {
      type: 'REMOVE'
      payload: {
        id: number
        data: object[]
      }
    }

type State = {
  items: [] | string
  totalAmount: number
}

// const defaultCartState = cobaCookie()

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return {
        items: [],
        totalAmount: 0,
      }
    // if (cart) {
    //   // there are values on cookie cart
    //   cartValues = JSON.parse(cart)
    //   let newCartValues = [...cartValues] // copy array
    //   const indexTheCart = cartValues.findIndex(
    //     (value: any) => value.id === action.payload.id,
    //   )
    //   if (indexTheCart !== -1) {
    //     const theCart = newCartValues[indexTheCart]
    //     let newCart = { ...theCart, qty: action.payload.qty + theCart.qty }
    //     return updateCart(newCart)
    //   }

    //   return newCartValues.push(state)
    // }
    // return
  }
  return defaultCartState
}

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    // <main></main>
  )
}
export default CartProvider
