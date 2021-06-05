import Image from 'next/image';
import Link from 'next/link';
import Search_Bar from '../components/DeskVersion/Search_Bar';



function Article(){

    const hide = () => {
        form.classList.remove("form_enabled");
        fondo.classList.remove("form_enabled");
    }


    return(
    
           
        <div className="us-div">

            <div className="Article" id="article">
                
                <div className="main_article">
                    <div className="info_art" >
                        <div className="cont">
                            <div className="publicacion_art">
                                <div className="fecha">
                                    <h5 className="fecha_public pie_foto">Publicado el 3 de noviembre de 2020</h5> 
                                </div>
                                <div>
                                    <Image src="/linea_fecha.svg"
                                    width="800%" height="50%" className="linea_fecha_img"/>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className="contenedor_art">  
                                
                                <p className="keywords">entrevista, ilustración, diseño gráfico</p>
                                
                                <div className="contenedor_tit">
                                    <h1>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</h1><br/>

                                    <p>por Chrystian López</p>

                                    <div className="share-div">
                                        <a href="" className="share">
                                            <div >
                                                <Image src="/Twitter_share.svg" width="50%" height="50%" />
                                            </div>    
                                        </a>

                                        <a href="" className="share">
                                            <div >
                                                <Image src="/Facebook_share.svg" width="50%" height="50%" />
                                            </div>    
                                        </a>

                                        <a href="" className="share" >
                                            <div >
                                                <Image src="/icono_whatsapp.svg" width="50%" height="50%" />
                                            </div>    
                                        </a>
                                    </div>

                                    <h2>ALGUNAS REFLEXIONES SOBRE LA DIVERSIDAD ÉTNICA EN LA PUBLICIDAD Y EL DISEÑO.</h2>

                                </div>
                                    

                                <p>A <b>Miguel</b> lo conocí, hace poco más de un año, en una de sus conferencias de tipografía. En ese momento no tenía idea de la persona que tenía de frente. El tiempo hizo lo suyo; hoy puedo decir, con certeza, que tuve la oportunidad de conversar con uno de los diseñadores de carteles e ilustraciones más importantes del país.<br/><br/>A pesar de su apretada agenda y los momentos inciertos que se vive en el mundo, me sorprendió saber que había aceptado mi invitación. Aceptar la entrevista para Énfasis, quizás es la forma en la que el...</p>
                                        
                                <div className="pic_art">
                                    <Image src="/pic_art.svg" width="1000%" height="1060%" className="pic_art_img"/>

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
                            
                    


                        <div className="coment">

                            <div className="vert_line">
                                <Image src="/vertical_line.svg" width="100%" height="1000%" className="vert_line_img"/>
                            </div>

                            <div className="text_com">
                                    <p>Ni pensarlo. Me considero no apto para tan compleja tarea. Creo que colaborar con un guionista puede ser. En el máster de ilustración, que recién terminé, tuve la oportunidad de hacer guiones y bocetos de historietas. Es muy complejo y termino con dolor de cabeza. No hay que equivocarse. No todos somos buenos para todo. Aunque he ilustrado varias hostorietas, no es algo que ando buscando para hacer.</p>
                                    <p className="author"><b>Miguel Monkc</b></p><br/><br/>
                            </div>

                        </div>
                        
                        
                        <div className="contenedor_art">    

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

                    
                    <div className="promo_colum">

                        <div >
                            <Image src="/promo_column_img.svg" width="200%" height="50%" className="linea_promo"/>

                        </div>

                        <div className="siguenos">
                            <h2>Síguenos</h2>

                            <div className="LinkFollow">
                                <Link href="https://www.instagram.com/enfasismag" > 
                                    <Image src="/instagram.svg" width="60%" height="50%" className="siguenos_img"/>
                                </Link>
                                
                                <Link href="https://www.facebook.com/enfasismag" >
                                    <Image src="/facebook.svg" width="60%" height="50%" className="siguenos_img"/>
                                </Link>

                                <Link href="https://www.twitter.com/enfasismag" > 
                                    <Image src="/twitter.svg" width="60%" height="50%" className="siguenos_img"/> 
                                </Link>
                            </div>
                        </div>

                        <div >
                            <Image src="/promo_column_img.svg" width="200%" height="50%" className="linea_promo linea_promo2 "/>
                        </div>

                        <div className="reciente">


                            <h2>LO MÁS RECIENTE</h2>

                            <a href="">
                                <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                            </a>
                                
                            <a href="">
                                <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                            </a>
                            <a href="">
                                <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                            </a>
                    
                        </div>

                        <div className="home-button Home_art">
                            <a href="#article" >
                                <Image src="/Boton_Art.svg" width="60%" height="60%" className="Home_art_img"/>
                            </a>
                        </div>


                        <div className="public_pagada">
                            
                        </div>

                    </div>

                    
                </div>
            
            </div>
        
            

            <div id="form_letter" className="form_letter form_active" >

                        <div>
                            <Image src="/failed.svg" width="100%" height="100%" id="close" className="cerrar_form" onClick={hide}/>
                        </div>
                        

                        <div className="cont_form">
                                
                            <Image src="/stick.svg" width="100%" height="100%" className="stick"/>
                            
                            
                            <div className="live_mail">
                                <p>Déjanos tu correo para que no te pierdas ninguna de nuestras ediciones.</p>
                            </div>
                            
                            <form action="Submit">

                                <input type="text" name="email" placeholder="escribe tu correo" className="placeholder" required/><br/>
                
                            </form>
                            
                            <button id="sendinfo"  className="Suscribir " onClick = {hide}>Suscribirme</button>            

                        </div> 
                        
                    
                </div>

            <div className="fondo_atenuado" id="tenue">
                        
            </div>
        
        </div>
            
    );    
   
}export default Article