import Image from 'next/image'
import Link from 'next/link'
import Search_Bar from '../components/DeskVersion/Search_Bar'
import FormDesk from '../components/FormDesk'

export default function Creators(){
    return(
        <div className="Creators">
            

            <FormDesk />
            
            <Search_Bar />

           <div className="contenedor">

                <div className="GraphicArt">
                    <Image src="/Graphic-Article.svg" height="3500%" width="6500%" />
                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Francesc Freixes: "Defiendo la idea de que el diseño está en las calles de una ciudad".
                            </p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Más allá del muro, la identidad visual del proyecto dedelmu.
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                La tarde de las artes. Un cartel hecho por Claudio Sotolongo.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="DownloadSection">

                    <div className="Tittle">
                        <h1>Descarga Énfasis</h1>
                        
                        <div className="LineDownload">
                            <Image src="/linea.svg" width="3000%" height="20%" />
                        </div>
                        
                    </div>

                    <div className="Download">
                        <div className="Download_Card">
                            <div className="DownloadCardImg">
                                <Image src="/smallrect.svg" width="700%" height="700%" />
                            </div>
                            <div className="Info-to-Download">
                                <div className="tittle">
                                    <h1>Número 01</h1>

                                    <div className="tittle_image">
                                        <Image src="/lineamenor.svg" width="500%" height="20%" />
                                    </div>

                                    <h4>Miguel Monkc</h4>
                                </div>
                                <div className="ButtonsDownload">
                                    <button className="BlackButton DownButt">ver más</button><br/>
                                    <button className="BlackButton DownButt">descargar</button>
                                </div>
                            </div>
                        </div>

                        <div className="Download_Card">
                            <div className="DownloadCardImg">
                                <Image src="/smallrect.svg" width="700%" height="700%" />
                            </div>
                            <div className="Info-to-Download">
                                <div className="tittle">
                                    <h1>Número 00</h1>

                                    <div className="tittle_image">
                                        <Image src="/lineamenor.svg" width="500%" height="20%" />
                                    </div>

                                    <h4>Sandra Borges</h4>
                                </div>
                                <div className="ButtonsDownload">
                                    <button className="WhiteButton DownButt">ver más</button><br/>
                                    <button className="WhiteButton DownButt">descargar</button>
                                </div>
                            </div>
                        </div>
                    </div>    

                    <div className="LineDown">
                        <Image src="/linea.svg" width="7000%" height="15%" />
                    </div>

                </div>
                
                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Carteles clásicos cubanos adaptados a los tiempos de coronavirus.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Crematorium
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Ilustrando poesía, una serie de ilustraciones de Irian Carballosa.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Patrizia Stalder, ilustrando Cuba desde la distancia.
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Reconocemos la labor de Raupa, por su trabajo en ilustración.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Carteles clásicos cubanos adaptados a los tiempos de coronavirus.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Tittle CreatorTittle">
                    <h1>Diseño Gráfico</h1>
                    
                    <div className="LineDownload">
                        <Image src="/linea.svg" width="3000%" height="20%" />
                    </div>
                    
                </div>

                <div className="InvitationLine">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/Art_Creadores.svg" width="1200%" height="810%" />
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/Art_Creadores.svg" width="1200%" height="810%" />
                            </div>
                        </div>
                    </Link>
                </div>
            
                <div className="LineDown">
                    <Image src="/linea.svg" width="7000%" height="15%" />
                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Carteles clásicos cubanos adaptados a los tiempos de coronavirus.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Crematorium
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Ilustrando poesía, una serie de ilustraciones de Irian Carballosa.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Patrizia Stalder, ilustrando Cuba desde la distancia.
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Reconocemos la labor de Raupa, por su trabajo en ilustración.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/invitado.jpg" width="1200%" height="700%" />
                            </div>
                            <p className="Invited-description">
                                Carteles clásicos cubanos adaptados a los tiempos de coronavirus.
                            </p>
                        </div>
                    </Link>


                </div>

                <div className="Tittle CreatorTittle">
                    <h1>Arquitectura</h1>
                    
                    <div className="LineDownload">
                        <Image src="/linea.svg" width="3000%" height="20%" />
                    </div>
                    
                </div>

                <div className="InvitationLine">
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/Art_Creadores.svg" width="1200%" height="810%" />
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <div className="invited">
                                <Image src="/Art_Creadores.svg" width="1200%" height="810%" />
                            </div>
                        </div>
                    </Link>
                </div>
            
            </div>
       
        </div>
    );
}