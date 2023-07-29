import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name : 'productDetails',
    initialState : {
        productInfo : []
    },

    reducers : {
        getProductInfo : (state,action) => {
            state.productInfo = action.payload
        }
    }
})

export const {getProductInfo} = productSlice.actions