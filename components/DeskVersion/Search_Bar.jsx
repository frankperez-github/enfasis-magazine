import Image from 'next/image'

function ShowForm(){
    document.getElementById('FormDesk').style.display="block";
}

export default function Search_Bar(){
    return(

        <div className="Search_Bar">

            <div className="barra_izq">
    
                <div className="links_redes">
    
                    <a href="https://www.instagram.com/enfasismag">
                        <div className="links2follow">
                            <Image src="/instagram.svg" width="100%" height="100%"/>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/enfasismag">
                        <div className="links2follow">
                            <Image src="/facebook.svg" width="100%" height="100%"/>
                        </div>
                    </a>
                    <a href="https://www.twitter.com/enfasismag">
                        <div className="links2follow">
                            <Image src="/twitter.svg" width="100%" height="100%"/>
                        </div> 
                    </a>
                    
                </div>            
                
                <div className="LineaLinks">
                    <Image src="/L_nea_42.svg" width="300%" height="10%" />
                </div>
                
            </div>
    
            <div className="barra_derch">
    
    
                <div className="search">

                    <div className="findicon">

                        <input type="search" placeholder="buscar" className="input-search"/>
                            
                        <div className="to-search">
                            <Image src="/Buscar.svg" width="50%" height="25%" />
                        </div>
                    

                    </div>

                    <div className="linea_search">
                        <Image src="/L_nea_44.svg" width="1000%" height="20%" />
                    </div>
                    
                   
                </div>
    
                <div className="letter">
    
                    <div className="Letter-div" >
                        <Image src="/Newsletter.svg" width="40%" height="26%" className="letterimg" onClick={ShowForm}/>
                    </div>
                    
                    <div className="letter_line">
                        <Image src="/L_nea_43.svg" width="55%" height="5%" />
                    </div>
                    
    
                </div>
    
            </div>
        </div>
    );
}