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
        if (res.status==201){ alert("You have subscribed succesfully"); HideForm()}
        else alert(data.email)
    }
    

    return(
        <div id="Form">

            <div id="Newsletter">
            
                <div id="form_letter" className="form_letter form_letterMob" >

                    <div className="cerrar_form">
                        <Image src="/failed.svg" width="100%" height="100%" onClick={HideForm}/>
                    </div>


                    <div className="cont_form cont_formMob">
                            
                        <div className="stick">
                            <Image src="/stick.svg" width="100%" height="100%" className="stick" /> 
                        </div>
                        
                        
                        <div className="live_mail live_mailMob">
                            <p>Déjanos tu correo para que no te pierdas ninguna de nuestras ediciones.</p>
                        </div>
                        
                        <form  onSubmit={handleSubmit}>

                            <input onChange={(e)=>{setSubscriber(e.target.value)}} value={subscriber} type="email" name="email" placeholder="escribe tu correo" className="placeholder placeholderMob" required/><br/>
                            <button id="sendinfo" type="submit"  className="Suscribir SuscribirMob">Suscribirme</button>          

                        </form>
                        
                        

                    </div> 


                </div>

                <div className="fondo_atenuado" id="tenue">
                
                </div>
            
            </div>

        </div>
    );
}export default FormDesk;


