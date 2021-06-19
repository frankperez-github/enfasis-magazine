import GeneralMenu from "./GeneralMenu";
import Image from 'next/image';

export default function MagazineMob(){
    return(
        <div className="magazineMobBody">
            <GeneralMenu />
            <div className="MagazineMob">

                <div className="principal_divMob">

                    <div className="princ_izqMob">

                        <div className="big_rectMob">
                            <Image src="/portada_2.jpg" width="6000%" height="8000%"/>
                        </div>
                            
                        <div className="rectspeqsMob">
                            <div className="RectPeqMob">
                                <Image src="/interior_1.2.jpg" width="350%" height="300%" className="small_rect"/>
                            </div>
                            <div className="RectPeqMob">
                                <Image src="/interior_2.2.jpg" width="350%" height="300%" className="small_rect"/>
                            </div>
                            <div className="RectPeqMob">
                                    <Image src="/interior_3.2.jpg" width="350%" height="300%" className="small_rect"/>
                            </div>
                        </div>
                            
                    </div>

                    <div className="princ_derchMob">

                        <h1>Numero 01</h1>

                        <div className="lineasubtMob">
                            <Image src="/lineamenor.svg" width="300%" height="15%" />
                        </div>

                        <div className="inforevMob">
                            <h3>Miguel Monk</h3><br/>
                            <p>Colaboradores:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita alias ipsum quae totam dolor? Deserunt minus animi nihil quibusdam eligendi dolor asperiores atque. Sed voluptatum eveniet doloremque! Sapiente, porro.</p>
                        </div>

                        <a href="" className="downbuttMob">
                            <button className="DownloadbuttonMob">descargar</button>
                        </a>    

                    </div>
                </div> 

                <div className="linea_edicMob">
                    <Image src="/linea.svg" width="3000%" height="50%" />
                </div>

                <div className="principal_divMob">

                    <div className="princ_izqMob">

                        <div className="big_rectMob">
                            <Image src="/portada_1.jpg" width="6000%" height="8000%"/>
                        </div>
                            
                        <div className="rectspeqsMob">
                            <div className="RectPeqMob">
                                <Image src="/interior_1.jpg" width="350%" height="300%" className="small_rect"/>
                            </div>
                            <div className="RectPeqMob">
                                <Image src="/interior_2.jpg" width="350%" height="300%" className="small_rect"/>
                            </div>
                            <div className="RectPeqMob">
                                    <Image src="/interior_3.jpg" width="350%" height="300%" className="small_rect"/>
                            </div>
                        </div>
                            
                    </div>

                    <div className="princ_derchMob">

                        <h1>Numero 00</h1>

                        <div className="lineasubtMob">
                            <Image src="/lineamenor.svg" width="300%" height="15%" />
                        </div>

                        <div className="inforevMob">
                            <h3>Miguel Monk</h3><br/>
                            <p>Colaboradores:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita alias ipsum quae totam dolor? Deserunt minus animi nihil quibusdam eligendi dolor asperiores atque. Sed voluptatum eveniet doloremque! Sapiente, porro.</p>
                        </div>

                        <a href="" className="downbuttMob">
                            <button className="DownloadbuttonMob">descargar</button>
                        </a>    

                    </div>
                </div> 
            </div>

            
        </div>
    );
}