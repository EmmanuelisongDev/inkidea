import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  const textSize = "text-6xl  font-bold md:text-8xl lg:text-9xl ";
  return (
    <nav className="  relative  z-[10000] ">
      <div className=" flex justify-end w-full left-0 pr-[3%] mt-[5%] z-50 bg- fixed font-bold ">
        <button
          onClick={handleToggle}
          className=" bg-blend-difference bg-white rounded-full transition-all delay-100 duration-200  hover:bg-[#1b1b1b] hover:text-white text-[#1b1b1b] p-2"
        >
          {toggle ? "Close" : "Menu"}
        </button>
      </div>
      <main
        className={` ${
          toggle ? "visible" : " opacity-0 pointer-events-none "
        } h-full w-full fixed right-0 top-0 rounded-lg transition-all delay-150 duration-300  bg-[#e3f8c0]`}
      >
        <div className=" w-full  flex  justify-end items-center  h-full align-middle">
          <ul className=" mr-[3%] flex flex-col text-right gap-4">
            <li className={textSize}>
              <Link href="/" onClick={handleToggle}>
                Home
              </Link>
            </li>
            <li className={textSize}>
              <Link href="/about" onClick={handleToggle}>
                About
              </Link>
            </li>
            <li className={textSize}>
              <Link href="/contact" onClick={handleToggle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </nav>
  );
}
