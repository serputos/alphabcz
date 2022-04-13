 import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navBar";
import Head from 'next/head'

 
 export default function Layout({children}){
    return( 
       
    
    <div  >
        <Head>
        <title>AlphaBCZ</title>
        <meta name="AlphaBCZ phothography" content="AlphaBCZ phothography" />
      
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
          
    
         {children}
        
    
       {/*  <Footer/> */}
        
          </div>);
 }