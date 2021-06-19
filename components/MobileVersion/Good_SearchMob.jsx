import Link from 'next/link'
import GeneralMenu from './GeneralMenu';


export default function Good_SearchMob(){
    return(
        <div className="">
            <GeneralMenu />
            <div className="Good_SearchMob">

                <div class="resultsMob">
        
                    <h1>Resultados para " <span/> ":</h1>
            
                    <div class="tarjetasMob">
                        <Link href="/Article">
                            <div class="tarjetaMob">
                                <div className="PicSearchMob">
                                    
                                </div>

                                
                                <p >JoeFerro y el Arte del metal.</p>
                                
                                
                            </div>
                        </Link>
                            
                        <Link href="/Article">
                            <div class="tarjetaMob">
                                <div className="PicSearchMob">
                                    
                                </div>

                                
                                <p >JoeFerro y el Arte del metal.</p>
                                
                                
                            </div>
                        </Link>
                    </div>
                </div>
                
        
            </div>
        </div>
    );
}