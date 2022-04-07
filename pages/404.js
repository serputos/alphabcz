import Link from "next/link";
 
export default function NotFound(){
   return( <div >
       <h1 className="not-found" >OOOOOOOPS...</h1>
       <h2 >This page cannot be found</h2>
       <p >Go to the <Link href="/"><a>Homepage</a></Link> </p>
       
         </div>);
}