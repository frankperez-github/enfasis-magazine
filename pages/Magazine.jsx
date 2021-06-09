import Image from 'next/image';
import FormDesk from '../components/FormDesk'
import Search_Bar from '../components/DeskVersion/Search_Bar';


function Magazine(){

  

    return(

        <div className="Magazine">
            <Search_Bar/>

            <FormDesk />
                  
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


           
        </div>
        
    );
}export default Magazine;
