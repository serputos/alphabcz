 import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navBar";
 
 export default function Layout({children}){
    return( <div className="content" >
        <Navbar/>
        {children}
        <Footer/>
        
          </div>);
 }