import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {     
       
    return (
        <div>
<<<<<<< HEAD
            <h1  className='text-yellow-400'>This is my Updated Home Page</h1>
            <Image src={'/images/images.jpg'} alt="image" width={300} height={300}/><br></br>
            <Image src={'/images/download.jpg'} alt="image" width={300} height={300}/>
=======
            <h1  className='text-yellow-400'>This is Home Page</h1>
            <Image src={'/images/images.jpg'} alt="image" width={300} height={300}/>
            {/* <Image src={'/images/download.jpg'} alt="image" width={300} height={300}/> */}
>>>>>>> 45377e3 (Added one image)
        </div> 
    );
}
