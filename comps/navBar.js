
import { Fragment, useEffect, useRef, useState } from "react";



export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  return (
  
      <div>
        {" "}
        <span>
          {" "}
          <h1 className=" w-full flex flex-col items-center bg-black px-4 py-3 text-8xl  font-Teko text-white">
            {" "}
            ALPHA BCZ
          </h1>
        </span>{" "}
        
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <a className="w-full flex flex-col items-center py-2 bg-black text-white text-[20px] font-Teko hover:cursor-pointer ">
            ▼
          </a>
          </div>
          {/*   <ChevronDownIcon className=" w-10 h-10 text-white font-Teko hover:w-15 h-15 " /> */}{" "}
          {isHover && (
            <div>
              {" "}
              <button onMouseOver={() => setIsHover(true)} className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-90 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                GALLERY
              </button>
              <button onMouseOver={() => setIsHover(true)} className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-90 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                PROJECTS
              </button>
              <button onMouseOver={() => setIsHover(true)} className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-90 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                PHOTOGRAPHY
              </button>
            </div>
          )}
        
      </div>

  );
}
