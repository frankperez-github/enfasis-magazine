import Image from 'next/image'



export default function Newsletter(){

    function HideForm(){
        document.getElementById('Newsletter').style.display="none";
    }

    return(
        <div id="Newsletter">
             
                <div className="form_letterMob" >
    
                    <div className="cerrar_form">
                        <Image src="/failed.svg" width="100%" height="100%" onClick={HideForm}/>
                    </div>
    
    
                    <div className="cont_formMob">
                            
                        <div className="stick">
                            <Image src="/stick.svg" width="100%" height="100%" className="stick" /> 
                        </div>
                        
                        
                        <div className="live_mailMob">
                            <p>Déjanos tu correo para que no te pierdas ninguna de nuestras ediciones.</p>
                        </div>
                        
                        <form action="Submit" >
    
                            <input type="text" name="email" placeholder="escribe tu correo" className="placeholderMob" required/><br/>
    
                        </form>
                        
                        <button id="sendinfo"  className="SuscribirMob" onClick={HideForm}>Suscribirme</button>            
    
                    </div> 
    
    
                </div>
    
                <div className="fondo_atenuado" id="tenue">
                
                </div>
    
            
        
        </div>
    );
}