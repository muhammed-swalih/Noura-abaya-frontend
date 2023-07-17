import React from "react";
import logo from "../../Assets/LOGO.webp";
import {BiLogoVisa} from 'react-icons/bi'
import {BiLogoMastercard} from 'react-icons/bi'
import {FaWhatsapp, FaInstagram, FaFacebook} from 'react-icons/fa'
import {FaPaypal} from 'react-icons/fa'
function Footer() {
  return (
    <div className="md:w-full h-72 bg-green-800 flex items-center justify-center">
      <div className="md:w-[1250px] h-full flex justify-around px-10 gap-10 items-center">
        <div className="md:flex flex-col gap-5 ">
          <img className=" ml-[-50px]" src={logo} alt="" width={300} />
          <h1 className="  md:text-gray-300 w-80 text-sm">
            we provides a never seem before contemperory off the peg modest
            fashion
          </h1>
          <div className="md:w-52  rounded-3xl h-12 bg-white flex justify-center items-center px-5">
            <BiLogoVisa className=" md:text-5xl"/>
            <BiLogoMastercard className=" md:text-5xl"/>
            <FaPaypal className=" md:text-3xl"/>
          </div>
        </div>

        <div className=" md:flex flex-col gap-5 md:text-white">
            <div className=" md:uppercase text-lg">shop</div>
            <div className=" flex flex-col gap-2 text-sm">
                <h1>All collection</h1>
                <h1>Winter edition</h1>
                <h1>Discount</h1>
            </div>
        </div>
        <div className=" md:flex flex-col gap-5 md:text-white">
            <div className=" md:uppercase text-lg">shop</div>
            <div className=" flex flex-col gap-2 text-sm">
                <h1>All collection</h1>
                <h1>Winter edition</h1>
                <h1>Discount</h1>
            </div>
        </div>
        <div className=" md:flex flex-col gap-5 md:text-white">
            <div className=" md:uppercase text-lg">shop</div>
            <div className=" flex flex-col gap-2 text-sm">
                <h1>All collection</h1>
                <h1>Winter edition</h1>
                <h1>Discount</h1>
            </div>
        </div>

        <div className=" md: w-auto text-white h-full flex items-center  justify-center gap-2">
            <FaFacebook className=" md:text-xl"/>
            <FaWhatsapp className=" md:text-xl"/>
            <FaInstagram className=" md:text-xl"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
