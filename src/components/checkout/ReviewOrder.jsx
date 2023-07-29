import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ReviewOrder() {
  const paymentInfo = useSelector((state) => state.paymentInfo.paymentInfo);
  const productInfo = useSelector(state => state.productInfo.productInfo)
  useEffect(() => {
    console.log(paymentInfo);
  });
  return (
    <div className=" w-full min-h-screen bg-slate-200">
      <div className=" w-full min-h-screen flex items-center justify-center">
          <div className=" w-[800px] h-[700px] bg-white flex items-center justify-center py-10 px-10">
              <div className=" flex justify-between gap-10"> 
                  <div>
                    <Typography variant="h5" gutterBottom>
                        Product Detalis
                    </Typography>
                    <Typography variant="body">product name : {productInfo.title}</Typography>
                    <Typography variant="body">price : {productInfo.price}</Typography>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default ReviewOrder;
