import Image from 'next/image'


function HideForm(){
    document.getElementById('FormDesk').style.display="none";
}

export default function FormDesk(){
    return(
        <div id="FormDesk">
                
            <div id="form_letter" className="form_letter" >

                <div className="cerrar_form">
                    <Image src="/failed.svg" width="100%" height="100%" onClick={HideForm}/>
                </div>


                <div className="cont_form">
                        
                    <div className="stick">
                        <Image src="/stick.svg" width="100%" height="100%" className="stick" /> 
                    </div>
                    
                    
                    <div className="live_mail">
                        <p>Déjanos tu correo para que no te pierdas ninguna de nuestras ediciones.</p>
                    </div>
                    
                    <form action="Submit">

                        <input type="text" name="email" placeholder="escribe tu correo" className="placeholder" required/><br/>

                    </form>
                    
                    <button id="sendinfo"  className="Suscribir" onClick={HideForm}>Suscribirme</button>            

                </div> 


            </div>

            <div className="fondo_atenuado" id="tenue">
            
            </div>

        </div>
    );
}


