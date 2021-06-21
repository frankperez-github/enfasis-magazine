import GeneralMenu from "./GeneralMenu";
import Link from 'next/link';
import Image from 'next/image';


export default function ArticleMob(){
    return(
        <div className="ArticleMob">

            <GeneralMenu />

            <div className="article">
                <div className="info_artMob" >

                    <div className="contenedorMob">
                        <div className="publicacion_art publication">
                            <div className="fechaMob">
                                <h5 className="fecha_public">Publicado el 3 de noviembre de 2020</h5> 
                            </div>
                            <div className="lineaFecha">
                                <Image src="/linea_fecha.svg"
                                width="800%" height="50%" className="linea_fecha_img"/>
                            </div>
                        </div>
                    
                    
                
                    
                            
                        <p className="keywordsMob"> entrevista, ilustración, diseño gráfico</p><br/>
                        
                        <div className="contenedor_titMob">
                            <h1>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</h1><br/>

                            <p>por Chrystian López</p>

                            <div className="share-div shareMob">
                                <a href="" className="share" target="_blank">
                                    <div className="shareArt">
                                        <Image src="/Twitter_share.svg" width="50%" height="50%" />
                                    </div>    
                                </a>

                                <a href="http://www.facebook.com/sharer.php?u=<?php echo URL( get_permalink() ); ?>"  className="share" target="_blank">
                                    <div className="shareArt">
                                        <Image src="/Facebook_share.svg" width="50%" height="50%" />
                                    </div>    
                                </a>

                                <a href="" className="share" target="_blank">
                                    <div className="shareArt">
                                        <Image src="/icono_whatsapp.svg" width="50%" height="50%" />
                                    </div>    
                                </a>
                            </div>

                            <h2>ALGUNAS REFLEXIONES SOBRE LA DIVERSIDAD ÉTNICA EN LA PUBLICIDAD Y EL DISEÑO.</h2>

                        </div>
                            

                        <p>A <b>Miguel</b> lo conocí, hace poco más de un año, en una de sus conferencias de tipografía. En ese momento no tenía idea de la persona que tenía de frente. El tiempo hizo lo suyo; hoy puedo decir, con certeza, que tuve la oportunidad de conversar con uno de los diseñadores de carteles e ilustraciones más importantes del país.<br/><br/>A pesar de su apretada agenda y los momentos inciertos que se vive en el mundo, me sorprendió saber que había aceptado mi invitación. Aceptar la entrevista para Énfasis, quizás es la forma en la que el...</p>
                                
                        <div className="pic_artMob">
                            <Image src="/pic_art.svg" width="2000%" height="2000%" className="pic_art_img"/>

                            <h5 className="pie_foto">Miguel Monkc, 2020.</h5>
                        </div>

                        
                                

                        <h3>Por que usas Monkc como seudónimo?</h3><br/>
                        <p>
                            Me gustan las novelas ambientadas en el medioevo. Terminé identificándome con la palabra inglés monk, que traducida al español significa monje. La c al final la añadí por necesidad. En los sitios webs, los traductores automáticos de Google, convertían la palabra original al español, de ese modo aparecía: ilustraciones de Miguel Monje.
                        </p>

                        <h3>Te defines como ilustrador y diseñador de carteles.¿Qué te hizo inclinarte por estas dos ramas del diseño?</h3><br/>
                        <p>
                            De estudiante me gustaba el cartel antes de diseñar el primero. Todo surgió por una cuestión de gustos. Soy ilustrador porque la vida y la calle me han llevado a ello. Nunca lo preví. Una vez que haces algo que te gusta te lleva a otro encargo nuevo, y así sucesivamente. Sin darte cuenta, comienzas a dejar un hilo detrás de ti que sirve a los clientes para...
                        </p>
                   
                        
                
                    </div>

                    <div className="comentMob">

                        <div className="vert_lineMob">
                            <Image src="/lineamenor.svg" width="1000%" height="100%"/>
                        </div>

                        <div className="text_comMob">
                            <p>Ni pensarlo. Me considero no apto para tan compleja tarea. Creo que colaborar con un guionista puede ser. En el máster de ilustración, que recién terminé, tuve la oportunidad de hacer guiones y bocetos de historietas. Es muy complejo y termino con dolor de cabeza. No hay que equivocarse. No todos somos buenos para todo. Aunque he ilustrado varias hostorietas, no es algo que ando buscando para hacer.</p>
                            <p className="author"><b>Miguel Monkc</b></p><br/><br/>
                        </div>

                    </div>
                    
                    
                    <div className="contenedorMob">    

                        <h3>Por que usas Monkc como seudónimo?</h3><br/>
                        <p>
                            Me gustan las novelas ambientadas en el medioevo. Terminé identificándome con la palabra inglés monk, que traducida al español significa monje. La c al final la añadí por necesidad. En los sitios webs, los traductores automáticos de Google, convertían la palabra original al español, de ese modo aparecía: ilustraciones de Miguel Monje.
                        </p>

                        <h3>Te defines como ilustrador y diseñador de carteles.¿Qué te hizo inclinarte por estas dos ramas del diseño?</h3><br/>
                        <p>
                            De estudiante me gustaba el cartel antes de diseñar el primero. Todo surgió por una cuestión de gustos. Soy ilustrador porque la vida y la calle me han llevado a ello. Nunca lo preví. Una vez que haces algo que te gusta te lleva a otro encargo nuevo, y así sucesivamente. Sin darte cuenta, comienzas a dejar un hilo detrás de ti que sirve a los clientes para...
                        </p>

                    </div>

                </div>

                
                <div className="promo_columMob contenedorMob">

                    <div className="lineaPromoMob">
                        <Image src="/promo_column_img.svg" width="800%" height="50%"/>

                    </div>

                    <div className="siguenos siguenosMob">
                        <h2>Síguenos</h2>

                        <div className="LinkFollow">
                            <a href="https://www.instagram.com/enfasismag" target="_blank" className="LinkArt"> 
                                <Image src="/instagram.svg" width="60%" height="50%" className="siguenos_img"/>
                            </a>
                            
                            <a href="https://www.facebook.com/enfasismag" target="_blank" className="LinkArt">
                                <Image src="/facebook.svg" width="60%" height="50%" className="siguenos_img"/>
                            </a>

                            <a href="https://www.twitter.com/enfasismag" target="_blank" className="LinkArt"> 
                                <Image src="/twitter.svg" width="60%" height="50%" className="siguenos_img"/> 
                            </a>
                        </div>
                    </div>

                    <div className="lineaPromoMob">
                        <Image src="/promo_column_img.svg" width="800%" height="50%" />
                    </div>

                    <div className="recienteMob">


                        <h2>LO MÁS RECIENTE</h2>

                        <a href="/Graphic_Design">
                            <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                        </a>
                            
                        <a href="/Creators">
                            <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                        </a>
                        <a href="/Architecture">
                            <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                        </a>
                
                    </div>

                    <div className="home-button Home_art home-buttonMob">
                        <Link href="#article" >
                            <Image src="/Boton_Art.svg" width="60%" height="60%" />
                        </Link>
                    </div>

                    
                    <div className="public_pagada">
                        <div className="PromoImgMob">
                            <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                        </div>
                        
                        <div className="PromoImgMob">
                            <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                        </div>

                        <div className="PromoImgMob">
                            <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                        </div>

                        <div className="PromoImgMob">
                            <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                        </div>
                        
                    </div><br/><br/>
                </div>

                
            </div>
            

        </div>
    );
}