import Image from 'next/image'






function Good_Search(){


    return(
           
    <div className="good-search-div">

        <div class="container_about_us">
    
            <div class="results">
    
                <h1>Resultados para "  ":</h1>
        
                <div class="tarjetas">
                    
                    <div class="tarjeta">
                        <Image src="/invitado.jpg" className="invit_tarjeta" width="100%" height="100%" />
        
                        <p>JoeFerro y el Arte del metal.</p>
                    </div>
                        
                    <div class="tarjeta">
                       <Image src="/invitado.jpg" className="invit_tarjeta" width="100%" height="100%" />
                        
                        <p>Alejandra Picart: Sí, Soy Artesana</p>
                    </div>
                    
                </div>
    
                <div class="tarjetas">
                    
                    <div class="tarjeta">
                       <Image src="/invitado.jpg" className="invit_tarjeta" width="100%" height="100%" />
        
                        <p>Hardy; El Fotógrafo de las emociones.</p>
                    </div>
                        
                    <div class="tarjeta">
                       <Image src="/invitado.jpg" className="invit_tarjeta" width="100%" height="100%" />
                        
                        <p>Linospottery</p>
                    </div>
                    
                </div>
               
                
                
            </div>
        </div>
        
        
    </div>       

    );    
}export default Good_Search