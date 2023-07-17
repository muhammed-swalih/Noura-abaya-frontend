import {createSlice} from '@reduxjs/toolkit'

export const shippingDetailsSlice = createSlice({
    name:'shipping details',
    initialState : {
        details : []
    },
    reducers : {
        getShippingDetails : (state,action)=> {
            state.details = action.payload
        }
    }
})

export const {getShippingDetails} = shippingDetailsSlice.actions

