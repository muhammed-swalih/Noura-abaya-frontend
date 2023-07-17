import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React, { useEffect, useRef } from "react";
import girl1 from "../../Assets/girl1.webp";
import girl2 from "../../Assets/girl2.webp";
import girl3 from "../../Assets/girl3.webp";
import bg from "../../Assets/BG.webp";

function Ad() {
  return (
  <div className=" md:w-full h-auto flex flex-col items-center justify-center pt-20 z-10">
    <div
      className=" md:w-full min-h-screen bg-cover gap-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" md:flex gap-2 items-center justify-center">
        <div
          className=" md:w-60 h-96 bg-cover flex items-center"
          style={{
            backgroundImage: `url(${girl1})`,
          }}
        ></div>
        <div
          className=" md:w-60 h-[600px] bg-cover"
          style={{ backgroundImage: `url(${girl2})` }}
        ></div>
        <div
          className=" md:w-60 h-96 bg-cover flex items-center"
          style={{ backgroundImage: `url(${girl3})` }}
        ></div>
      </div>
      <div className="md:flex flex-col ">
        <h1 className=" md:text-5xl w-[500px] font-semibold leading-[60px]">
          Every Details of Fasihon Style
        </h1>
        <h1 className=" md:w-[500px] mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quidem
          vel molestias asperiores cupiditate. Qui eveniet necessitatibus, odio
          exercitationem mollitia beatae, possimus
        </h1>
      </div>
    </div>
  </div>
  )
}

export default Ad;
