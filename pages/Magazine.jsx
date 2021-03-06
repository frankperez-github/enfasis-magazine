import Image from 'next/image';
import FormDesk from '../components/FormDesk'
;
import MagazineCard from '../components/MagazineCard';
import { useEffect } from 'react';


function Magazine({magazines}){

  useEffect(()=>console.log(magazines), [])

    return(
        <div className="Component">
            <div className="Magazine">

                
                
                <FormDesk />    
                

            {magazines.map(magazine=>{return <div  className=""><MagazineCard key={magazine.id} magazine={magazine} /> {magazine.id!=magazines[magazines.length-1].id && <div className="linea_edic">
                    <Image src="/linea.svg" width="3000%" height="10%" />
                </div> }</div>  })}
            
            </div>

        </div>
    );
}export default Magazine;


export const getServerSideProps = async() => {
    const res = await fetch("https://enfasisapi.com/api/revistas/")
    const magazines = await res.json()

    return {
        props: {
            magazines
        }
    }
}