import { Card, CardMedia } from "@mui/material";
import React from "react";
import abaya1 from "../../Assets/abaya1.webp";
import abaya2 from "../../Assets/abaya2.webp";
import abaya3 from "../../Assets/abaya3.webp";
import FproductCard from "../Home/FproductCard";
import TrendProducts from "./TrendProducts";
function Main() {
  const featuredProductDetails = [
    {
      title: "casual open abaya",
      price: "1000",
      Image: abaya1,
      rating: "5",
      id : '1'
    },
    {
      title: "hello open abaya",
      price: "1000",
      Image: abaya2,
      rating: "5",
      id : '2'
    },
    {
      title: "Tossel Abaya",
      price: "1000",
      Image: abaya3,
      rating: "5",
      id : '3'
    },
    {
      title: "casual open abaya",
      price: "1000",
      Image: abaya1,
      rating: "5",
      id : '4'
    },
    {
      title: "hello open abaya",
      price: "1000",
      Image: abaya2,
      rating: "5",
      id : '5'
    },
    {
      title: "Tossel Abaya",
      price: "1000",
      Image: abaya3,
      rating: "5",
      id : '6'
    },
  ];
  return (
    <div className=" md:w-full h-auto py-10">
      <div className=" md:w-full h-auto flex items-center justify-center">
        <h1 className=" md:text-7xl font-extrabold md:text-gray-300">
          Trends
        </h1>
      </div>
      {/* <div className=" w-full my-2 flex items-center justify-center">
        <hr className=" w-96 text-center" />
      </div> */}
      <div className=" md:flex items-center justify-center my-10 ">
        <div className="">
          <div className=" md:w-[1250px] h-auto py-10  bg-gray-100  rounded-3xl ">
            <div className=" md:w-full h-auto flex flex-wrap">
              <div className=" md:flex flex-wrap gap-5 items-center justify-center">
                {featuredProductDetails.map((items, index) => {
                  return (
                    <TrendProducts
                      index={index}
                      trendItems={items}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
