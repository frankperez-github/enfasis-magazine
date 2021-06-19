import Image from 'next/image'
import Link from 'next/link'
import Failed_SearchMob from '../components/MobileVersion/Failed_SearchMob';


function Failed_Search(){


    return(
        <div className="Comp">

            <Failed_SearchMob />

            <div className="Failed_Search">
                
                <div class="failed-div">
                    <div className="failed_svg">
                        <Image src="/failed.svg" width="200%" height="200%" />
                    </div>
                    <p>Lo sentimos, no hemos encontrado resultados para " <span/> ".</p>

                    <div class="button-div">
                        <Link href="/">
                            <button class="failedbutton">Volver a la pagina principal</button>
                        </Link>
                    </div>
            
                </div>
            
            </div>
        </div>
    );
}export default Failed_Search;
