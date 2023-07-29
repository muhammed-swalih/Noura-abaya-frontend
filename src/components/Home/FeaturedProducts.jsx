import React, { useEffect, useRef } from "react";
import abaya1 from "../../Assets/abaya1.webp";
import abaya2 from "../../Assets/abaya2.webp";
import abaya3 from "../../Assets/abaya3.webp";
import FproductCard from "./FproductCard";
import {useInView} from 'react-intersection-observer'
function FeaturedProducts() {
  const featuredProductDetails = [
    {
      title: "casual open abaya",
      price: "1000",
      Image: abaya1,
      rating : '5',
      id :1,
    },
    {
      title: "hello open abaya",
      price: "1000",
      Image: abaya2,
      rating : '5',
      id:2,

    },
    {
      title: "Tossel Abaya",
      price: "1000",
      Image: abaya3,
      rating : '5',
      id:3
    },
  ]

  // const {ref, inView} = useInView({threshold:0})
  // const FRef = useRef();

  // useEffect(()=>{
  //   if(inView){
  //     FRef.current.style.transform = "translateX(0)"
  //   }else {
  //     FRef.current.style.transform = "translateX(250)"
  //   }
  // },[inView])

  return (
    <div  className=" md:w-full h-60 flex flex-col items-center justify-center px-10 my-72">
      <h1  className=" md:text-4xl mb-10 mt-20 ">Featured Products</h1>
      <div className=" md:w-[1250px] h-auto flex items-center justify-center gap-5 ">
        {featuredProductDetails.map((items,index) => {
          return (
            <FproductCard  key={index} featuredProductDetails={items} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
