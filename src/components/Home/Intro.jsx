import React, { useEffect, useRef, useState } from "react";
import bg from "../../Assets/GIRL.webp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useInView } from "react-intersection-observer";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import "../../styles/styles.css";
function Intro() {

  return (
    <div className=" bg-fixed md:w-screen h-auto flex justify-center items-center  bg-cover bg-green-800 relative md:bg-fixed ">
      <div className=" md:w-full h-full flex justify-center items-end">
        <img
          className="bg-fixed md:object-cover"
          src={bg}
          alt=""
          width={1000}
        />
      </div>
      <div className="md:absolute bottom-5 left-20">
        <div className=" md:flex gap-1 items-center">
          <div>
            <CiLocationOn className=" md:text-white text-5xl" />
          </div>
          <div className="md:flex flex-col text-white">
            <h1 className=" md:font-thin text-xs">Visit our new Store</h1>
            <h1>Near Donube Herra Street.Jeedah </h1>
          </div>
        </div>
      </div>
      <div className="text-yellow-500 md:absolute bottom-16 right-[400px] md:text-white">
        <div className=" md:flex flex-col ">
          <div className="md:flex items-center gap-1">
            <h1 className="md:font-bold text-6xl">01</h1>
            <h1 className="md:font-thin text-5xl flex items-end">/</h1>
            <h1 className=" md:font-thin">03</h1>
          </div>
          <div className=" md:text-white text-sm">
            <h1>Black Tassel Abaya</h1>
          </div>
        </div>
      </div>
      <div className=" md:absolute bottom-5 right-20">
        <div className=" md:flex gap-3 items-center">
          <div className=" md:w-8 h-8 bg-white flex items-center justify-center rounded-full text-lg ">
            <FaWhatsapp />
          </div>
          <div className=" md:w-8 h-8 bg-white flex items-center justify-center rounded-full text-lg ">
            <FaFacebook />
          </div>
          <div className=" md:w-8 h-8 md:bg-white flex items-center justify-center rounded-full text-lg ">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
