import Image from 'next/image'
import '../Desk.css'


//For this section
import {ReactComponent as Date_Line} from '../../imgs/linea_fecha.svg';
import {ReactComponent as ShareTwit} from '../../imgs/Twitter_share.svg';
import {ReactComponent as ShareFace} from '../../imgs/Facebook_share.svg';
import {ReactComponent as ShareWhats} from '../../imgs/icono_whatsapp.svg';
import {ReactComponent as Pic_article} from '../../imgs/pic_art.svg';
import {ReactComponent as VerticalLine} from '../../imgs/vertical_line.svg';
import {ReactComponent as Top_column} from '../../imgs/promo_column_img.svg';
import {ReactComponent as Boton_home_art} from '../../imgs/Boton_Art.svg';



//For All sections
import {ReactComponent as Failed} from '../../imgs/failed.svg';
import {ReactComponent as Stick} from '../../imgs/stick.svg';
import {ReactComponent as FollowInsta} from '../../imgs/instagram.svg';
import {ReactComponent as FollowFace} from '../../imgs/facebook.svg';
import {ReactComponent as FollowTwit} from '../../imgs/twitter.svg';


var fondo = document.getElementById("tenue");
var form = document.getElementById("form_letter");


function Article(){

    const hide = () => {
        form.classList.remove("form_enabled");
        fondo.classList.remove("form_enabled");
    }

    return(
           
        <div className="us-div">

            <div className="Article">
        
                <div className="main_article">
                    <div className="info_art" >
                        <div className="cont">
                            <div className="publicacion_art">
                                <div className="fecha">
                                    <h5 className="fecha_public pie_foto">Publicado el 3 de noviembre de 2020</h5> 
                                </div>
                                <div className="">
                                    
                                    <Date_Line className="linea_fecha_img"/>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className="contenedor_art">  
                                
                                <p className="keywords">entrevista, ilustración, diseño gráfico</p>
                                
                                <div className="contenedor_tit">
                                    <h1>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</h1><br/>

                                    <p>por Chrystian López</p>

                                    <a href="">
                                        <ShareTwit className="contenedor_tit_img"/>
                                    </a>

                                    <a href="javascript:window.location.href=('http://www.facebook.com/share.php?u= '+actual_path+'&t='+tit_act+'')">
                                        <ShareFace className="contenedor_tit_img"/>
                                    </a>

                                    <a href="https://api.whatsapp.com/send? text=window.location.href">
                                        <ShareWhats className="contenedor_tit_img"/>
                                    </a>

                                    <h2>ALGUNAS REFLEXIONES SOBRE LA DIVERSIDAD ÉTNICA EN LA PUBLICIDAD Y EL DISEÑO.</h2>

                                </div>
                                    

                                <p>A <b>Miguel</b> lo conocí, hace poco más de un año, en una de sus conferencias de tipografía. En ese momento no tenía idea de la persona que tenía de frente. El tiempo hizo lo suyo; hoy puedo decir, con certeza, que tuve la oportunidad de conversar con uno de los diseñadores de carteles e ilustraciones más importantes del país.<br/><br/>A pesar de su apretada agenda y los momentos inciertos que se vive en el mundo, me sorprendió saber que había aceptado mi invitación. Aceptar la entrevista para Énfasis, quizás es la forma en la que el...</p>
                                        
                                <div className="pic_art">
                                    <Pic_article className="pic_art_img"/>

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
                                    <VerticalLine className="vert_line_img"/>
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

                                <Top_column className="linea_promo"/>

                            </div>

                            <div className="siguenos">
                                <h2>Síguenos</h2>

                                <a href="https://www.instagram.com/enfasismag"> <FollowInsta className="siguenos_img"/> </a>
                                <a href="https://www.facebook.com/enfasismag"> <FollowFace  className="siguenos_img"/> </a>
                                <a href="https://www.twitter.com/enfasismag"> <FollowTwit className="siguenos_img"/> </a>
                            
                            </div>

                            <Top_column className="linea_promo linea_promo2 "/>

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
                                    <Boton_home_art className="Home_art_img"/>
                                </a>
                            </div>


                            <div className="public_pagada">
                                
                            </div>
                        

            
                    </div>

                    
                </div>
            
            </div>
        
            

            <div id="form_letter" className="form_letter form_active" >

                        <div  >

                            <Failed id="close" className="cerrar_form" onClick={hide}/>
                            
                        </div>
                        

                        <div className="cont_form">
                                
                            <Stick className="stick"/>
                            
                            
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