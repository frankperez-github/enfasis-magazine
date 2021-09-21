import Image from 'next/image';
import FormDesk from '../components/FormDesk'
import Search_Bar from '../components/DeskVersion/Search_Bar';
import MagazineCard from '../components/MagazineCard';
import { useEffect } from 'react';


function Magazine({magazines}){

  useEffect(()=>console.log(magazines), [])

    return(
        <div className="Component">
            <div className="Magazine">
                <div className="SuperiorPart">
                
                    <Search_Bar/>

                </div>
                
                <FormDesk />    
                
         

                <div className="linea_edic">
                    <Image src="/linea.svg" width="3000%" height="10%" />
                </div>

            {magazines.map(magazine=>{return <MagazineCard magazine={magazine} key={magazine.id}/>})}
            
            </div>

        </div>
    );
}export default Magazine;


export const getStaticProps = async() => {
    const res = await fetch("http://django-env.eba-v37cvdpk.us-west-2.elasticbeanstalk.com/api/revistas/")
    const magazines = await res.json()

    return {
        props: {
            magazines
        }
    }
}