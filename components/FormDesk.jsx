import Image from 'next/image'
import { useState } from 'react';

function FormDesk(){

    const [subscriber, setSubscriber] = useState("")

    function HideForm(){
        document.getElementById('Form').style.display="none";
        document.getElementById('GeneralMenu').style.display="none";
        document.getElementById('Newsletter').style.display="none" 
    }
    
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await fetch('https://enfasisapi.com/api/subscribers/', {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({"email":subscriber})})
        const data = await res.json()

       
        document.getElementById('form').style.display="none"

        if (res.status==201){ 
            document.getElementById('BlackStick').style.display="none"
            document.getElementById('GreenStick').style.display="block"

            document.getElementById('success').style.display="block"
            document.getElementById('failed').style.display="none"
            document.getElementById('normalText').style.display="none"

            setTimeout(()=>{
                HideForm();
            }, 2500)
            
        }
        else {
            document.getElementById('success').style.display="none"
            document.getElementById('failed').style.display="block"
            document.getElementById('normalText').style.display="none"

            setTimeout(()=>{
                HideForm();
            }, 2500)
        }
    }
    

    return(
        <div id="Form">

            <div id="Newsletter">
            
                <div id="form_letter" className="form_letter " >

                    <div className="cerrar_form">
                        <Image src="/failed.svg" width="100%" height="100%" onClick={HideForm}/>
                    </div>


                    <div className="cont_form">
                            
                        <div className="stick " id="BlackStick">
                           <svg className="" xmlns="http://www.w3.org/2000/svg" id="artboard-svg" width="31" height="64" viewBox="0 0 31 64"><defs><filter id="Rectángulo_15" width="1298" height="124" x="-9" y="-6" filterUnits="userSpaceOnUse"><feOffset dy="3"/><feGaussianBlur result="blur" stdDeviation="3"/><feFlood flood-opacity=".102"/><feComposite in2="blur" operator="in"/><feComposite in="SourceGraphic"/></filter><clipPath id="clip-newsletter"><path d="M0 0h1280v800H0z"/></clipPath></defs><g transform="translate(-623 -232)"><g id="newsletter" class="cls-1"><g id="Grupo_51" data-name="Grupo 51" transform="translate(-8670 -5306)"><path id="Trazado_79" d="M550.221 178.215l23.04-60.791h5.957l-28.389 60.791z" data-name="Trazado 79" transform="translate(8743.779 5420.625)"/></g></g></g></svg>
                        </div>
                        <div className="stick" id="GreenStick" >
                           <svg className="" xmlns="http://www.w3.org/2000/svg" id="artboard-svg" width="31" height="64" viewBox="0 0 31 64"><defs><filter id="Rectángulo_15" width="1298" height="124" x="-9" y="-6" filterUnits="userSpaceOnUse"><feOffset dy="3"/><feGaussianBlur result="blur" stdDeviation="3"/><feFlood flood-opacity=".102"/><feComposite in2="blur" operator="in"/><feComposite in="SourceGraphic"/></filter><clipPath id="clip-newsletter"><path d="M0 0h1280v800H0z"/></clipPath></defs><g transform="translate(-623 -232)"><g id="newsletter" class="cls-1"><g id="Grupo_51" data-name="Grupo 51" transform="translate(-8670 -5306)"><path id="Trazado_79" d="M550.221 178.215l23.04-60.791h5.957l-28.389 60.791z" data-name="Trazado 79" transform="translate(8743.779 5420.625)"/></g></g></g></svg>
                        </div>
                        
            
                        <div className="live_mail" id="normalText">
                            <p>Déjanos tu correo para que no te pierdas ninguna de nuestras ediciones.</p>
                        </div>

                        <div className="live_mail" id="success">
                            <p>Tu suscripción se ha completado.<br/> Ahora sabrás cuando esté disponible un nuevo número</p>
                        </div>

                        <div className="live_mail"  id="failed">
                            <p>Algo ha pasado.<br/> No hemos podido guardar la información vuelve a intentarlo.</p>
                        </div>

                        <div className="live_mail">

                        </div>
                        
                        <form id="form" onSubmit={handleSubmit}>

                            <input onChange={(e)=>{setSubscriber(e.target.value)}} value={subscriber} type="email" name="email" placeholder="escribe tu correo" className="placeholder placeholderMob" required/><br/>

                            <button id="sendinfo" type="submit"  className="Suscribir">Suscribirme</button>          

                        </form>
                        
            

                    </div> 


                </div>

                <div className="fondo_atenuado" id="tenue">
                
                </div>
            
            </div>

        </div>
    );
}export default FormDesk;


