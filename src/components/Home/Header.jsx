import React, { useEffect, useReducer, useRef } from "react";
import logo from "../../Assets/LOGO.webp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });
  // const navRef = useRef();

  // useEffect(() => {
  //   if (inView) {
  //     navRef.current.style.transform = "translateY(0)";
  //   } else {
  //     navRef.current.style.transform = "translateY(-150%)";
  //   }
  // }, [inView]);
  return (
    <div className=" w-full h-20 flex justify-center items-center bg-green-800">
      <div className=" md:w-full h-20 pr-15 flex items-center bg-green-800 fixed justify-center  z-10 ">
        <div className=" w-[1500px] flex items-center justify-center">
          <div className=" md:flex-1 pt-5">
            <img
              // ref={navRef}
              style={{ transform: "translateY(0)", transitionDuration: "1s" }}
              src={logo}
              alt=""
              width={300}
            />
          </div>
          <div>
            <div className=" md:flex gap-2 items-center">
              <div className="md:flex gap-5  text-white border border-1 border-white rounded-full px-4 py-2 text-sm">
                <a
                  onClick={() => {
                    navigate("/");
                  }}
                  className=" md:uppercase font-thin tracking-wider hover:font-normal"
                  href="#"
                >
                  Home
                </a>
                <a
                  className=" md:uppercase font-thin tracking-wider hover:font-normal "
                  href="#"
                >
                  Shop all
                </a>
                <a
                  onClick={() => {
                    navigate("/trends");
                  }}
                  className=" md:uppercase font-thin tracking-wider hover:font-normal"
                  href="#"
                >
                  Trends
                </a>
              </div>
              <div className="md:mr-16 flex gap-2">
                <div className=" md:border border-1 cursor-pointer border-white rounded-full px-2 py-2">
                  <PersonOutlineOutlinedIcon sx={{ color: "white" }} />
                </div>
                <div className=" md:border border-1 cursor-pointer border-white rounded-full px-2 py-2">
                  <div className=" flex gap-2 items-center justify-center">
                    <ShoppingBasketIcon sx={{ color: "white" }} />
                    <div className=" md:text-white">10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
