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
  items: []
  totalAmount: number
}

export async function cartReducer(state: State, action: Action): State {
  const defaultCartState = await cobaCookie()
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

export function useCookies() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)

  const { data, error, isLoading } = useSWR('/api/cart', fetcher)

  return {
    data,
    isLoading,
    error,
  }
}

const CartProvider = async ({ children }: { children: React.ReactNode }) => {
  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState,
  // )

  // const coba = useCookies()
  // console.log('coba', coba)

  // const cartContext = {
  //   items: cartState.items,
  //   totalAmount: cartState.totalAmount,
  // }

  return (
    // <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    <main></main>
  )
}
export default CartProvider
