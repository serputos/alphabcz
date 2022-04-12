
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image"
import logoBN from "../public/logoBN.png"
import styles from '../styles/Home.module.css'




export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  

  return (
    
    
    
    <div>
      <div className="content">
        {" "}
        <span>
          {" "}
          <h1 className=" w-full flex flex-col items-center bg-black px-4 py-3 text-8xl  font-Teko text-white">
            {" "}
            <Image src={logoBN} alt="logoBN" width="230px" height="153px"  />
          </h1>
        </span>{" "}
        
        <div 
          onClick={() => setIsHover((x) => !x)}
        
        >
          <a className="w-full flex flex-col items-center py-2 bg-black text-white text-[20px] font-Teko hover:cursor-pointer ">
            ▼
          </a>
          </div>
          {/*   <ChevronDownIcon className=" w-10 h-10 text-white font-Teko hover:w-15 h-15 " /> */}{" "}
          {isHover && (
            <div>
              {" "}
              <button className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-60 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                GALLERY
              </button>
              <button className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-60 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                PROJECTS
              </button>
              <button className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-60 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                PHOTOGRAPHY
              </button>
            </div>
          )}
        
      </div>
      

      
   
 </div>      

  );
}
