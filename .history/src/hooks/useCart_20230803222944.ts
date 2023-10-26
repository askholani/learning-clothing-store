import { StateCart, ActionCart } from '@components/types/reducer'

export function cartReducer(state: StateCart, action: ActionCart): StateCart {
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
