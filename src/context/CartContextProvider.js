import React, { useReducer} from 'react';
import { createContext } from 'react';

const initialState ={
    selectedItems :[],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const sumItemes = items => {
    const itemsCounter = items.reduce((total,product) => total + product.quantity,0);
    const total = items.reduce((total,product) => total + product.price*product.quantity,0).toFixed(2);
    return{itemsCounter,total}
}

const cartReducer = (state,action) =>{
    console.log('Reducer',state);
    switch(action.type){
        case "ADD_ITEM":
        if(!state.selectedItems.find(item => item.id === action.payload.id)){
            state.selectedItems.push({
                ...action.payload,
                quantity: 1,
                checkout: false
            })      
        }
        return {
            ...state,selectedItems:[...state.selectedItems],
            ...sumItemes(state.selectedItems)    
        }
        
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                    ...state,selectedItems: [...newSelectedItems],
                    ...sumItemes(newSelectedItems)  
                   }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {...state,...sumItemes(state.selectedItems)}
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {...state,...sumItemes(state.selectedItems)}
        case "CHECKOUT":
            return {
                selectedItems : [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR_ALL":
            return {
                selectedItems :[],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return state;

    }
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer,initialState);

  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;