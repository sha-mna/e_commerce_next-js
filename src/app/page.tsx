import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {     
       
    return (
        <div>
            <h1  className='text-yellow-400'>This is Home Page</h1>
            <Image src={'/images/images.jpg'} alt="image" width={300} height={300}/>

            
           
        </div> 
    );
}
