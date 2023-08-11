import { cookies } from 'next/headers'
import { useReducer } from 'react'

interface Action {
   type : 'ADD' | 'REMOVE' | 'UPDATE'
   product? : object[]
}

function cartReducer(state: object[], action: object ) {
   switch(action.type) 
}
