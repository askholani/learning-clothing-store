import { cookies } from 'next/headers'
import { useReducer } from 'react'

interface Action {
   type : 'ADD' | 'REMOVE' | 'UPDATE'
   product? : object[]
   id? : number
   count? : number
}

function cartReducer(state: object[], action: object ) {
   switch(action.type) 
}
