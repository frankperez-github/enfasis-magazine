
export default function Search() {

    return(
        <div className="barra-div">

            <div className="barra_izq">
    
                <div className="links_redes">
    
                    <a href="https://www.instagram.com/enfasismag"> 
                        <Image src="/instagram.svg" width="50%" height="50%"/>
                    </a>
                    <a href="https://www.facebook.com/enfasismag">
                        <Image src="/facebook.svg" width="50%" height="50%"/>
                    </a>
                    <a href="https://www.twitter.com/enfasismag"> 
                        <Image src="/twitter.svg" width="50%" height="50%"/> 
                    </a>
                    
                </div>            
                
                <div >
                    <Image src="/L_nea_42" width="100%" height="50%" className="linea_link"/>
                </div>
                
            </div>
    
            <div className="barra_derch">
    
    
                <div className="search">

                    <div className="findicon">
                        <input type="search" placeholder="buscar" className="input-search"/>

                        <Image src="/Buscar" width="100%" height="50%" className="to-search"/>  
                    </div>
    
                    <Image src="/L_nea_44" width="100%" height="50%" className="linea_link"/>
                
                </div>
    
                <div className="letter">
    
                    <div className="" >
                        <Image src="/Newsletter.svg" width="100%" height="50%" className="letterimg" id="openform" />
                    </div>
                    
                    <Image src="/L_nea_43" width="100%" height="50%" className="linea_letter"/>
    
                </div>
    
            </div>
                    
        </div>
           
    );
}