
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image"
import logoBN from "../public/logoBN.png"
import { Menu,Transition} from "@headlessui/react";
import { ChevronDownIcon} from "@heroicons/react/solid";




export default function Footer() {
  const [isHover, setIsHover] = useState(false);
 
  return (
  
      <Menu>


        {" "}
        <span>
          {" "}
          <h1 className=" w-full flex flex-col items-center bg-black px-4 py-3 text-8xl  font-Teko text-white">
            {" "}
            <Image src={logoBN} alt="logoBN" width="250px" height="163px"  />
          </h1>
        </span>{" "}

        
        <div
     
        >
          <Menu.Button onClick={()=> setIsHover((isHover)=>!isHover)} className="w-full flex flex-col items-center py-2 bg-black text-white text-[20px] font-Teko hover:cursor-pointer ">
          <ChevronDownIcon onClick={()=> setIsHover((isHover)=>!isHover)}  className=" w-10 h-10 text-white font-Teko hover:w-15 h-15" />
          </Menu.Button>
          </div>
          {/*   <ChevronDownIcon className=" w-10 h-10 text-white font-Teko hover:w-15 h-15 " /> */}{" "}
          
       <Transition
        show={isHover}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
      >
          <Menu.Items > 
              {" "}
              <Menu.Item>
          
                <button  className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-90 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                GALLERY
              </button>
            
              </Menu.Item>
              
              <Menu.Item>
                <button  className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-90 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                GALLERY
              </button>
              </Menu.Item>
              <Menu.Item>
                <button  className=" w-full px-4 py-2 text-2xl  font-Teko text-white bg-black hover:bg-opacity-90 hover:border-2 border-white  cursor-pointer transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:duration-200 ">
                GALLERY
              </button>
              </Menu.Item>
          
            </Menu.Items> 
       </Transition>
           
   
        
      </Menu>

  );
}
