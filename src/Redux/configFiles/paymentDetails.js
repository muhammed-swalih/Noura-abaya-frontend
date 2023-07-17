import {createSlice} from '@reduxjs/toolkit'

export const paymentSlice = createSlice({
    name : 'payment info',
    initialState : {
        paymentInfo : []
    },
    reducers : {
        getPaymentInfo : (state,action)=>{
            state.paymentInfo = action.payload
        }
    }
})

export const {getPaymentInfo} = paymentSlice.actions