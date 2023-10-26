import { StateCart, ActionCart } from '@components/types/reducer'

export function cartReducer(state: StateCart, action: ActionCart) {
  switch (action.type) {
    case 'GET':
      console.log('state', state)
      console.log('action', action)
      return {
        ...state,
      }
  }
  return state
}

export const defaultCartState: StateCart = {
  items: [],
  totalAmount: 0,
}
