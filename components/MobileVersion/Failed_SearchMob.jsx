import Link from 'next/link';
import Image from 'next/image';
import GeneralMenu from './GeneralMenu';

export default function Failed_SearchMob(){
    
    return(
        <div className="Failed_SearchMob">
            <GeneralMenu />
            <div class="failed-div">
                <div className="failed_svgMob">
                    <Image src="/failed.svg" width="200%" height="200%" />
                </div>

                <div className="FailedDivP">
                    <p>Lo sentimos, no hemos encontrado resultados para " <span/> ".</p>
                </div>
                
                <div class="button-div">
                    <Link href="/">
                        <button class="failedbuttonMob">Volver a la pagina principal</button>
                    </Link>
                </div>
        
            </div>
            
        </div>
    );
}