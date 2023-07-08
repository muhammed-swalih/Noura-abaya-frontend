import React from "react";
import { TbMinusVertical } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import {FaShoppingBag, FaShippingFast} from 'react-icons/fa'
import ad from '../../Assets/ad.webp'
function CustomerExperience() {
  return (
    <>
      <div>
        <div className=" md:w-full h-auto pt-20 pb-5 px-5 flex justify-around">
          <div className=" md:w-[1250px] h-auto">
            <div className=" md:flex justify-between items-center">
              <div className=" md:text-black">
                <h1 className=" md:text-4xl ">We provide best</h1>
                <h1 className=" md:text-4xl mt-2">customer experience</h1>
              </div>
              <div className=" md:flex flex ">
                <div className=" md:flex flex-col">
                  <TbMinusVertical className=" md:text-6xl font-thin" />
                  <TbMinusVertical className=" md:text-6xl font-thin mt-[-25px]" />
                </div>
                <div className=" md:text-gray-500 flex items-center">
                  <h1 className=" md:w-[600px]">
                    We ensure our customers have the best shopping experience
                    and give a lots of choices for finding their favorites
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-full h-auto px-5 pt-10  flex justify-center">
          <div className=" md:w-[1250px] h-auto ">
            <div className=" md:flex justify-between items-center">
              <div className=" md:flex flex-col gap-1">
                <div className=" md:w-20 h-20 flex justify-center items-center bg-green-300 rounded-xl">
                  <GiMoneyStack className=" md:text-5xl" />
                </div>
                <h1 className=" md:text-2xl font-semibold">Orginal Products</h1>
                <h1 className=" md:text-gray-500 text-sm w-80">We provide money back guarantee if the product are not provided</h1>
              </div>
              <div className=" md:flex flex-col gap-1">
                <div className=" md:w-20 h-20 flex justify-center items-center bg-green-300 rounded-xl">
                  <FaShoppingBag className=" md:text-5xl" />
                </div>
                <h1 className=" md:text-2xl font-semibold">New Arrival Everyday</h1>
                <h1 className=" md:text-gray-500 text-sm w-80">We provide money back guarantee if the product are not provided</h1>
              </div>
              <div className=" md:flex flex-col gap-1">
                <div className=" md:w-20 h-20 flex justify-center items-center bg-green-300 rounded-xl">
                  <FaShippingFast className=" md:text-5xl" />
                </div>
                <h1 className=" md:text-2xl font-semibold">Fast & Free Shipping</h1>
                <h1 className=" md:text-gray-500 text-sm w-80">We provide money back guarantee if the product are not provided</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-full h-auto px-5 py-10 flex justify-center">
            <div className=" md:w-[1250px] h-auto">
                <img className=" w-full h-full object-cover" src={ad} alt="" />
            </div>

        </div>
      </div>
    </>
  );
}

export default CustomerExperience;
