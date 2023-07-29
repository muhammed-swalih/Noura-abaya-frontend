import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { shippingDetailsSlice } from '../configFiles/shippingDetailsConifg'
import {paymentSlice} from '../configFiles/paymentDetails'
import { productSlice } from '../configFiles/productDetails'

const rootReducer = combineReducers({
    shippingInfo : shippingDetailsSlice.reducer,
    paymentInfo : paymentSlice.reducer,
    productInfo : productSlice.reducer
})

const store = configureStore({
    reducer : rootReducer
})
const currentState = store.getState();
console.log(currentState);
export default store