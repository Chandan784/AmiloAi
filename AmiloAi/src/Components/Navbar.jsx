import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [display, setDisplay] = useState("hidden");

  function toggleClick() {
    if (open) {
      setDisplay("hidden");
      setOpen(false);
    } else {
      setDisplay("block");
      setOpen(true);
    }
  }

  return (
    <>
      <div className="flex justify-between px-8  lg:px-20 h-24 items-center">
        <div className="img">
          <h1 className="text-2xl font-bold">Amilo Ai</h1>
        </div>
        <div className="navList  ">
          {open ? (
            <ImCross
              className=" lg:hidden"
              fontSize={25}
              onClick={toggleClick}
            />
          ) : (
            <FaBars
              className=" lg:hidden"
              fontSize={25}
              onClick={toggleClick}
            />
          )}

          <ul className={`flex text-xl font-semibold hidden lg:flex lg:block`}>
            <li className="px-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-4">
              <Link to={"/About"}>About</Link>
            </li>
            <li className="px-4">
              <Link to={"/Careers"}>Careers</Link>
            </li>
            <li className="px-4">
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li className="px-4">
              <Link to={"/Service"}>Service</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={` ${display}`}>
        <div className="navList  h-screen  w-1/2 absolute right-0   bg-gray-900  text-white">
          <ul
            className={`flex flex-col text-xl font-semibold  text-center leading-10  py-4  `}
          >
            <li className="px-4">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="px-4">
              <Link to={"/About"}>About</Link>
            </li>
            <li className="px-4">
              <Link to={"/Careers"}>Careers</Link>
            </li>
            <li className="px-4">
              <Link to={"/Contact"}>Contact</Link>
            </li>
            <li className="px-4">
              <Link to={"/Service"}>Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
