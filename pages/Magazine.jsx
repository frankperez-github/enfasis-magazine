import Search_Bar from '../components/DeskVersion/Search_Bar';
import Image from 'next/image';





function Magazine(){

  

    return(

        <div className="magazine-div">
            <Search_Bar/>
                  
            <div className="principal_div">

                <div className="princ_izq">

                    <div className="big_rect">
                        <Image src="/portada_2.jpg" width="6000%" height="8000%"/>
                    </div>
                        
                    <div className="rectspeqs">
                        <div className="RectPeq">
                            <Image src="/interior_1.2.jpg" width="300%" height="300%" className="small_rect"/>
                        </div>
                        <div className="RectPeq">
                            <Image src="/interior_2.2.jpg" width="300%" height="300%" className="small_rect"/>
                        </div>
                       <div className="RectPeq">
                            <Image src="/interior_3.2.jpg" width="300%" height="300%" className="small_rect"/>
                       </div>
                    </div>
                        
                </div>

                <div className="princ_derch">

                   <h1>Numero 01</h1>

                    <div className="lineasubt">
                        <Image src="/lineamenor.svg" width="300%" height="15%" />
                    </div>

                    <div className="inforev">
                        <h3>Miguel Monk</h3><br/>
                        <p>Colaboradores:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita alias ipsum quae totam dolor? Deserunt minus animi nihil quibusdam eligendi dolor asperiores atque. Sed voluptatum eveniet doloremque! Sapiente, porro.</p>
                    </div>

                    <a href="" className="downbutt">
                        <button className="Downloadbutton">Descargar</button>
                    </a>    

                </div>
            </div>   

            <div className="linea_edic">
                <Image src="/linea.svg" width="3000%" height="10%" />
            </div>

        
        
            <div className="principal_div">

                <div className="princ_izq">

                    <div className="big_rect">
                        <Image src="/portada_1.jpg"  width="6000%" height="8000%"/>
                    </div>
                        
                    <div className="rectspeqs">
                        <div className="RectPeq">
                            <Image src="/interior_1.jpg" width="300%" height="300%" className="small_rect"/>
                        </div>
                        <div className="RectPeq">
                            <Image src="/interior_2.jpg" width="300%" height="300%" className="small_rect"/>
                        </div>
                       <div className="RectPeq">
                            <Image src="/interior_3.jpg" width="300%" height="300%" className="small_rect"/>
                       </div>
                    </div>
                        
                </div>

                <div className="princ_derch">

                   <h1>Numero 01</h1>

                    <div className="lineasubt">
                        <Image src="/lineamenor.svg" width="300%" height="15%" />
                    </div>

                    <div className="inforev">
                        <h3>Miguel Monk</h3><br/>
                        <p>Colaboradores:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita alias ipsum quae totam dolor? Deserunt minus animi nihil quibusdam eligendi dolor asperiores atque. Sed voluptatum eveniet doloremque! Sapiente, porro.</p>
                    </div>

                    <a href="" className="downbutt">
                        <button className="Downloadbutton">Descargar</button>
                    </a>    

                </div>
            </div>


            <div id="form_letter" className="form_letter form_active" >

                <div  >
                    <Image src="/failed.svg" width="100%" height="100%" id="close" className="cerrar_form" />
                </div>
                

                <div className="cont_form">
                        
                    <Image src="/stick.svg" width="100%" height="100%" className="stick" />
                    
                    
                    <div className="live_mail">
                        <p>Déjanos tu correo para que no te pierdas ninguna de nuestras ediciones.</p>
                    </div>
                    
                    <form action="Submit">

                        <input type="text" name="email" placeholder="escribe tu correo" className="placeholder" required/><br/>
        
                    </form>
                    
                    <button id="sendinfo"  className="Suscribir ">Suscribirme</button>            

                </div> 
                        
                    
            </div>

            <div className="fondo_atenuado" id="tenue">
                        
            </div>
        
        </div>
        
    );
}export default Magazine;
