import Image from 'next/image'
import { useEffect,useState } from 'react'
import styled from "styled-components"
import styles from '../styles/Home.module.css'
import Link from "next/link";




const Box = styled.div`
/*   position: relative;    */
   position: absolute;  
   z-index: -1;
   top: 0; 
 
     padding-top:220px    
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  
  const [width, setWidth] = useState(null);
  const [height, setheight] = useState(null);
 


  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
 <Box >
     
  <div className={styles.slider} >
 

   <div className={styles.slides}>
      <div  name="slide-1" id="slide-1">
     
     
      <Image
       className=''
        src={"/fotoA.png"}
        width={width}
        height={height} 
        alt=""/>
        
        <Link href={"/alphabcz/gallery"}>
        
           <a  className='position: absolute font-Teko  '>SomeText</a>
           
      </Link>
       
      
      </div>
      <div name="slide-2" id="slide-2">

      <Image
  
        src={"/fotoB.png"}
        width={width}
        height={height} 
        alt=""/>
          <Link href="/alphabcz/gallery" >
           <a className='position: absolute font-Teko'>SomeText</a>
      </Link>
      </div>
      <div id="slide-3"> <Image
     
        src={"/fotoC.png"}
        width={width}
        height={height } 
        alt=""/>
          <Link href="/alphabcz/gallery" >
           <a className='position: absolute font-Teko'>SomeText</a>
      </Link>
          </div>
    
    </div>
   {/* <Link href="" >
        <Image
        src={"/fotoA.png"}
        width={width}
        height={height-220} 
        alt=""/>
  </Link> */}

  

    </div>
 </Box>
       
     
    );
  }

  return null;
}

export default BGImage;



/* {fotos.map((foto, i) => (
  <>
<Box >
<Image
key={i}
className={i === fotoPantalla ? styles.Mostra : styles.noMostra }
onClick={()=>nextFoto()}
/*   onMouseEnter={(console.log(foto))}

src={foto}
 width={width}
height={height-220} 
alt=""
/>
</Box>
  </>
))} */