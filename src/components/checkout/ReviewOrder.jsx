import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
function ReviewOrder() {
    const paymentInfo = useSelector(state => state.paymentInfo.paymentInfo)
    useEffect(()=>{
        console.log(paymentInfo);
    })
  return (
    <div>
      hello 
    </div>
  )
}

export default ReviewOrder
