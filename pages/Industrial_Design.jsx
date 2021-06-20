import Image from 'next/image'
import Link from 'next/link'
import Search_Bar from '../components/DeskVersion/Search_Bar'
import FormDesk from '../components/FormDesk'
import IndustrialDesignMob from '../components/MobileVersion/IndustrialDesignMob'

export default function Industrial_Design(){
    return(

        <div className="Comp">

            <IndustrialDesignMob />

            <div className="Industrial_Design">
            

            <FormDesk />
            
            <Search_Bar />

            <div className="contenedor">

               <Link href="#">
                    <div className="PrincLink">
                        <div className="PrincipalArt">
                            <h2 className="PicByPrinc">Por Frank Perez</h2>
                        </div>
                        <div className="CategoryLabelPrinc">
                            Fotografía
                        </div>
                        <div className="TittleLabelPrinc">
                            Mario Elias Jaroud: fotografia, <br/>historia, arte. 
                        </div>
                    </div>
                </Link>   

                <div className="Inviteds_line">
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Francesc Freixes: "Defiendo la idea de que el diseño está en las calles de una ciudad".
                            </p>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                                    <button className="BlackButton DownButt">ver más</button><br/>
                                    <button className="BlackButton DownButt">descargar</button>
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Crematorium
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Patrizia Stalder, ilustrando Cuba desde la distancia.
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <div className="CategoryLabel">
                                Fotografía
                            </div>
                            <div className="TittleLabel">
                                Mario Elias Jaroud: fotografia, <br/>historia, arte. 
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <div className="CategoryLabel">
                                Fotografía
                            </div>
                            <div className="TittleLabel">
                                Mario Elias Jaroud: fotografia, <br/>historia, arte. 
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Crematorium
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Patrizia Stalder, ilustrando Cuba desde la distancia.
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <p className="Invited-description">
                                Valerio: ilustraciones para el libro Cuentos y Colores
                            </p>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
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
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <div className="CategoryLabel">
                                Fotografía
                            </div>
                            <div className="TittleLabel">
                                Mario Elias Jaroud: fotografia, <br/>historia, arte. 
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="#">
                        <div className="Invitation_card">
                            <h2 className="PicBy">
                                por Frank Perez
                            </h2>
                            <div className="invited">
                                
                            </div>
                            <div className="CategoryLabel">
                                Fotografía
                            </div>
                            <div className="TittleLabel">
                                Mario Elias Jaroud: fotografia, <br/>historia, arte. 
                            </div>
                        </div>
                    </Link>
                </div>
            
            </div>
        
        </div>
        </div>
    );
}