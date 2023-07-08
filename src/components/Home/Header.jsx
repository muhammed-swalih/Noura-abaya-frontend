import React from "react";
import logo from "../../Assets/LOGO.webp";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className=" md:w-full h-20 pr-15 flex items-center bg-green-800 fixed  z-10 ">
      <div className=" md:flex-1 pt-5">
        <img src={logo} alt="" width={300} />
      </div>
      <div className=" md:flex gap-2 items-center">
        <div className="md:flex gap-5  text-white border border-1 border-white rounded-full px-4 py-2 text-sm">
          <a
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
            className=" md:uppercase font-thin tracking-wider hover:font-normal"
            href="#"
          >
            Trends
          </a>
          <a
            className=" md:uppercase font-thin tracking-wider hover:font-normal"
            href="#"
          >
            collection
          </a>
        </div>
        <div className="md:mr-16 flex gap-2">
        <div className=" md:border border-1 cursor-pointer border-white rounded-full px-2 py-2">
          <PersonOutlineOutlinedIcon sx={{color:'white'}} />
        </div>
        <div className=" md:border border-1 cursor-pointer border-white rounded-full px-2 py-2">
          <ShoppingBasketIcon sx={{color:'white'}} />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
