import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navBar'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'
import styled from "styled-components"
import dynamic from 'next/dynamic'

const BgImage = dynamic(() => import("../comps/BGImage"), {
  ssr: false,
});

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
 
   position: absolute; 
 
  
 
`;


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>  
      <Wrapper>  

      <Navbar/>   
     

      </Wrapper>  
      <BgImage/> 
      </>


       
          </div>

 
  
  )
}
