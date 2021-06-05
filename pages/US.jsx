import React from 'react'
import ReactDOM from 'react-dom';
import '../Desk.css'

//For this section
import Linea from '../../imgs/lineamenor.svg';


//For All sections

import {ReactComponent as Failed} from '../../imgs/failed.svg';
import {ReactComponent as Stick} from '../../imgs/stick.svg';
import {ReactComponent as PrincLogo} from '../../imgs/Logo_home.svg';
import {ReactComponent as FollowInsta} from '../../imgs/instagram.svg';
import {ReactComponent as FollowFace} from '../../imgs/facebook.svg';
import {ReactComponent as FollowTwit} from '../../imgs/twitter.svg';
import {ReactComponent as Find} from '../../imgs/Buscar.svg';
import {ReactComponent as Letter} from '../../imgs/Newsletter.svg';
import Line_42 from'../../imgs/L_nea_42.svg';
import Line_43 from'../../imgs/L_nea_43.svg';
import Line_44 from'../../imgs/L_nea_44.svg';


var fondo = document.getElementById("tenue");
var form = document.getElementById("form_letter");




function Us(){


    const show = () =>{
        form.classList.add('form_enabled');
        fondo.classList.add('form_enabled');
    }

    const hide = () => {
        form.classList.remove("form_enabled");
        fondo.classList.remove("form_enabled");
    }


    return(
           
    <div className="us-div">

        <header>
            
            <div className="header-div">
                
                <div className="logorevista"> 

                    <a href="index.html" className="a-to-home">
                        <PrincLogo className="logorevistasvg"/>
                    </a>

                </div>
                
                <nav className="nav_bar">
                    <a href="">
                        <h2>diseño gráfico</h2>
                    </a>
    
                    <a href="#">
                        <h2>diseño industrial</h2>
                    </a>
                    
                    <a href="#">
                        <h2>arquitectura</h2>
                    </a>
    
                    <a href="#">
                        <h2>creadores</h2>
                    </a>
                    <a href="revista.html"  >
                        <h2>revista</h2>
                    </a>
                </nav>
                
            </div>
    
        </header>
        
        <div className="barra-div">

            <div className="barra_izq">
    
                <div className="links_redes">
    
                    <a href="https://www.instagram.com/enfasismag"> <FollowInsta className="links2follow"/> </a>
                    <a href="https://www.facebook.com/enfasismag"> <FollowFace className="links2follow"/> </a>
                    <a href="https://www.twitter.com/enfasismag"> <FollowTwit className="links2follow"/> </a>
                    
                </div>            
                
                <div >
                <img src={Line_42} alt = "" className="linea_links "/>
                </div>
                
            </div>
    
            <div className="barra_derch">
    
    
                <div className="search">

                    <div className="findicon">

                        <input type="search" placeholder="buscar" className="input-search"/>
                            
                        <Find className = "to-search"/>

                        
                    </div>
    
                    <img src={Line_44} alt = ""className="linea_search "/>
                   
                </div>
    
                <div className="letter">
    
                    <div className="" >
                    
                        <Letter className="letterimg" id="openform" onClick = {show} />

                    </div>
                    
                    <img src={Line_43} alt = ""className="linea_letter "/>
    
                </div>
    
            </div>
            
        </div>
    
        <div className="Nosotros">
    
            <div className="container_about_us">
    
                <div className="titular">
                    <div className="titular_izq">
                        <h1>ARTE<br/>DISEÑO & <br/>ARQUITECTURA</h1>
                    </div>
            
                    <div className="titular_derch">
            
                        
                        <img src={Linea} alt=""/>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at ipsum illo dicta alias eius modi odio quos eligendi. Voluptas aspernatur hic saepe eveniet quidem explicabo id aliquam eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptate adipisci, in natus eos commodi minus exercitationem minima architecto ipsum repudiandae veniam odio ratione sapiente pariatur deserunt vitae fuga nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, recusandae optio. Libero, quas? Delectus aspernatur id quae fuga.</p>
                    </div>
                </div>
    
                <div className="columnas">
    
                    <div className="column1 columna">
                        <h2>Contacta</h2>
                        <p>Hola! Nos encantaria saber de ti, pero recuerda revisar la Pagina de Preguntas Frecuentes y Terminos de Privacidad antes.</p>
                    </div>
    
                    <div className="colum2 columna">
                        <h2>Colabora</h2>
                        <p>No podemos llegar lejos sin tu apoyo. Si quieres unirte al grupo de colaboradores que comparten sus ideas cada edicion, revisa los requerimientos y envianos tu propuesta a <a href="mailto:renfasis@gmail.com ">renfasis@gmail.com</a></p>
                    </div>
    
                    <div className="column3 columna">
                        <h2>Promociona</h2>
                        <p>Si eres una empresa o negocio y quieres promocionar tus productos o servicios, por favor pide nuestro media kit en <a href="mailto:renfasis@gmail.com ">renfasis@gmail.com</a> para obtener informacion sobre nuestra revista y sus lectores.</p>
                    </div>
                
                </div>
    
                <div className="formulario_contacto">
    
                    <div className="contact_cont">
                        <h1>Contacto</h1>
                        <p>Si quieres saber mas sobre Enfasis, o colaborar con nosotros mandanos un mensaje a traves de este formulario y nos pondremos en contacto contigo. Los campos con (*) son obligatorios.</p>
    
                        <form action="Submit">
    
                            <label for="name">Nombre(*):</label><br/>
                            <input type="text" name="name" required /><br/>
    
                            <label for="email">Correo(*):</label><br/>
                            <input type="text" name="email" required/>
                            <br/>
    
                            <label for="topic">Asunto(*):</label><br/>
                            <input type="text" name="topic" required/>
                            <br/>
    
                            <label for="arch">Agregar archivo:</label>
                            <br/>
                            <input type="file" placeholder="agrega aqui" name="arch" id="" className="add"/>
                            <br/>

                            <label for="message">Mensaje(*):</label><br/>

                            <textarea name="message" type="message" required></textarea><br/>
    
                            <button className="sendbutton send" type="submit">Enviar</button >
    
                        </form>
                        
                    </div>
    
                </div>
    
                <div className="info_gral">
                        
                    <h1 className="the_next">Próximo<br/>Número</h1>
    
                    <div className="container_peq">
                        <p>Énfasis 03<br/><br/>
                        Temática: <b>El diseño UX en una sociedad digital.</b><br/><br/>
                        Publicación: <b>mayo 2021</b><br/></p>
                        <img src={Linea} alt="" className="lineamenor_img"/><br/>
                        <p>
                        Vamos camino a ser una sociedad digitalizada, vivimos en tiempos de teletrabajo y estudio a distancia. Éste es el momento perfecto para hablar sobre los productos digitales en Cuba, específicamente del diseño de experiencias de usuario o UX.</p>
    
                        <p>Ese medio que el usuario usa para comunicarse con una máquina, un equipo o una computadora; que abarca todos los puntos de contacto entre el usuario y el equipo. Normalmente suelen ser fáciles de entender y fáciles de accionar.</p>
                        <p>Siempre funciona así?</p>
                        <p>Alguna vez te has sentido perdido mientras navegas por una web o una aplicación?<br/><br/>Éste es tu momento para compartir tus experiencias.</p>
                        
                        <img src={Linea} alt="" className="lineamenor_img"/>
                        <p>Primeras ideas: <b>20 de MARZO 2021.</b></p>
                        <p>Entrega final(Propuestas seleccionadas): <b>10 de ABRIL 2021</b></p>
                        

                        <img src={Linea} alt="" className="lineamenor_img"/>
                        
                        <p><b>Condiciones de Colaboración</b></p>
                        <p className="colab"><b>Si quieres colaborar en Énfasis debes saber que:</b></p> 
                        <ol>
                            <li>La edición gira en torno al tema presentado. A partir del mismo, cuentas con total libertad para tu propuesta.</li>
                            <li>El trabajo que entregues debe ser específico y exclusivo para Énfasis.</li>
                            <li>Énfasis no está obligada a publicar todos los trabajos que recibe.</li>
                            <li>Una vez aceptadas tus propuestas por la dirección editorial de Énfasis, debes cumplir los plazos pautados.</li>
                        </ol><br/>
                        <img src={Linea} alt="" className="lineamenor_img"/>
                        <p><b>Formas de Participación</b></p>
                        <p>Textos: Ensayos, Crónicas, Relatos y Análisis.</p>
    
                        <p><b>Temas Sugeridos</b></p>
    
                        <ol>
                            <li>Ilustración: Todas las técnicas y Collage.</li>
                            <li>Fotografía: Arte, Moda, Paisaje, Arquitectura y Fotorreportaje.</li>
                            <li>Arte: Creadores contemporáneos de todos los ámbitos.</li>
                            <li>Arquitectura: Investigación, Teoría, Proyectos e Interiorismo.</li>
                        </ol>
                        <img src={Linea} alt="" className="lineamenor_img"/>
    
                        <p><b>Especificaciones</b></p>
                        <ol>
                            <li>Todos los textos enviados deben estar en español.</li>
                            <li>La entrega de las primeras ideas y así como la del artículo final consiste en un archivo Word (.doc) que debe ser nombrado "nombre de tu propuesta_nombre_apellido."</li>
                        </ol>
    
                        <img src={Linea} alt="" className="lineamenor_img linea_larga"/>
    
                        <p>PRIMERAS IDEAS & ENVIO DE ORIGINALES: <a href="mailto:renfasis@gmail.com">renfasis@gmail.com</a><br/>Asunto: "Colaboración_nombre de tu propuesta".</p>
    
                        <img src={Linea} alt="" className="lineamenor_img linea_larga"/>
    
                    </div>
                </div>
    
            </div>
                
                
    
        </div>
    
        <footer>
            
            <div className="infofooter ">
    
                <a href="nosotros.html">SOBRE <br/> NOSOTROS</a>
    
    
                <div className="networksft">
                    <a href="https://www.instagram.com/enfasismag">INSTAGRAM</a>
                    <a href="https://www.facebook.com/enfasismag">FACEBOOK</a>
                    <a href="https://www.twitter.com/enfasismag">TWITTER</a>
                </div>
    
                <a href="">POLÍTICA <br/> DE PRIVACIDAD</a>
                
               <p>  &copy; Énfasis <br/> 2020</p> 
    
            </div>

        </footer>

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
   
}export default Us