import GeneralMenu from "./GeneralMenu";
import Image from "next/image";


export default function AboutUsMob(){
    return(
        <div className="AboutUsMob">
            <GeneralMenu />

            <div className="contenedorMob">

                <div className="titular TitularMob">
                    <div className="titular_izq titular_izqMob">
                        <h1>ARTE<br/>DISEÑO & <br/>ARQUITECTURA</h1>
                    </div>
            
                    <div className="titular_derch titular_derchMob">

                        <div className="lineamenorMob">
                            <Image src="/lineamenor.svg" width="400%" height="20%" />
                        </div>
                        <p>Énfasis: es una revista cubana que se especializa en Diseño,  
Arquitectura y Arte. Se presenta como una publicación digital,  
en formato PDF con su respectivo sitio web y presencia activa en  
las redes sociales más populares.

Somos un equipo de diseñadores gráficos e industriales, fotógrafos, periodistas y comunicadores; trabajando juntos para  
dar a conocer, al público cubano y extranjero, y a su vez a ejercer un criterio sinexclusión ni politización, sobre el trabajo de nuestros diseñadores, arquitectos y artistas.</p>
                    </div>
                </div>
        
                <div className="columnasMob">
    
                    <div className="column1 columnaMob">
                        <h2>Contacta</h2>
                        <p>Hola! Nos encantaria saber de ti, pero recuerda revisar la Pagina de Preguntas Frecuentes y Terminos de Privacidad antes.</p>
                    </div>
    
                    <div className="colum2 columnaMob">
                        <h2>Colabora</h2>
                        <p>No podemos llegar lejos sin tu apoyo. Si quieres unirte al grupo de colaboradores que comparten sus ideas cada edicion, revisa los requerimientos y envianos tu propuesta a <a href="mailto:renfasis@gmail.com ">renfasis@gmail.com</a></p>
                    </div>
    
                    <div className="column3 columnaMob">
                        <h2>Promociona</h2>
                        <p>Si eres una empresa o negocio y quieres promocionar tus productos o servicios, por favor pide nuestro media kit en <a href="mailto:renfasis@gmail.com ">renfasis@gmail.com</a> para obtener informacion sobre nuestra revista y sus lectores.</p>
                    </div>
                
                </div>
            </div>

                <div className="formulario_contacto">
    
                    <div className="contact_cont contact_contMob">
                        <h1>Contacto</h1>
                        <p>Si quieres saber mas sobre Énfasis, o colaborar con nosotros mándanos un mensaje a través de este formulario y nos pondremos en contacto contigo. Los campos con (*) son obligatorios.</p>
    
                        <form action="Submit">
    
                            <label htmlFor="name">Nombre(*):</label><br/>
                            <input type="text" name="name" required /><br/>
    
                            <label htmlFor="email">Correo(*):</label><br/>
                            <input type="text" name="email" required/>
                            <br/>
    
                            <label htmlFor="topic">Asunto(*):</label><br/>
                            <input type="text" name="topic" required/>
                            <br/>
    
                            <label htmlFor="arch">Agregar archivo:</label>
                            <br/>
                            <input type="file" placeholder="agrega aqui" name="arch" id="" className="add"/>
                            <br/>

                            <label htmlFor="message">Mensaje(*):</label><br/>

                            <textarea name="message" type="message" required></textarea><br/>
    
                            <button className="sendbutton send" type="submit">Enviar</button >
    
                        </form>
                        
                    </div>
    
                </div>
    
            <div className="contenedorMob">

                <div className="info_gralMob">
                        
                    <h1 className="the_next">Próximo<br/>Número</h1>
    
                    <div className="container_peqMob">
                        <p>Énfasis 03<br/>
                        Temática: <b>El diseño UX en una sociedad digital.</b><br/>
                        Publicación: <b>mayo 2021</b><br/></p>

                        <div className="lineamenor_bodyMob">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/><br/>
                        </div>

                        <p>Vamos camino a ser una sociedad digitalizada, vivimos en tiempos de teletrabajo y estudio a distancia. Éste es el momento perfecto para hablar sobre los productos digitales en Cuba, específicamente del diseño de experiencias de usuario o UX.</p><br/>
    
                        <p>Ese medio que el usuario usa para comunicarse con una máquina, un equipo o una computadora; que abarca todos los puntos de contacto entre el usuario y el equipo. Normalmente suelen ser fáciles de entender y fáciles de accionar.</p><br/>
                        <p>Siempre funciona así?</p><br/>
                        <p>Alguna vez te has sentido perdido mientras navegas por una web o una aplicación?<br/><br/>Éste es tu momento para compartir tus experiencias.</p>
                        
                        <div className="lineamenor_bodyMob">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div>

                        <p>Primeras ideas: <b>20 de MARZO 2021.</b></p>
                        <p>Entrega final(Propuestas seleccionadas): <b>10 de ABRIL 2021</b></p>
                        

                        <div className="lineamenor_bodyMob">
                            <Image src="/lineamenor.svg" width="500%" height="15%" className="lineamenor_img"/>
                        </div><br/>

                        <p><b>Condiciones de Colaboración</b></p><br/>
                        <p className="colab"><b>Si quieres colaborar en Énfasis debes saber que:</b></p> 
                        <ol>
                            <li>La edición gira en torno al tema presentado. A partir del mismo, cuentas con total libertad para tu propuesta.</li>
                            <li>El trabajo que entregues debe ser específico y exclusivo para Énfasis.</li>
                            <li>Énfasis no está obligada a publicar todos los trabajos que recibe.</li>
                            <li>Una vez aceptadas tus propuestas por la dirección editorial de Énfasis, debes cumplir los plazos pautados.</li>
                        </ol><br/>

                        <div className="lineamenor_bodyMob">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div><br/>

                        <p><b>Formas de Participación</b></p>
                        <p>Textos: Ensayos, Crónicas, Relatos y Análisis.</p><br/>
    
                        <p><b>Temas Sugeridos</b></p>
    
                        <ol>
                            <li>Ilustración: Todas las técnicas y Collage.</li>
                            <li>Fotografía: Arte, Moda, Paisaje, Arquitectura y Fotorreportaje.</li>
                            <li>Arte: Creadores contemporáneos de todos los ámbitos.</li>
                            <li>Arquitectura: Investigación, Teoría, Proyectos e Interiorismo.</li>
                        </ol><br/>
                        
                        <div className="lineamenor_bodyMob">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div>

                        <p><b>Especificaciones</b></p>
                        <ol>
                            <li>Todos los textos enviados deben estar en español.</li>
                            <li>La entrega de las primeras ideas y así como la del artículo final consiste en un archivo Word (.doc) que debe ser nombrado "nombre de tu propuesta_nombre_apellido."</li>
                        </ol><br/>
    
                        <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img linea_larga"/>
    
                        <p>PRIMERAS IDEAS & ENVIO DE ORIGINALES: <a href="mailto:renfasis@gmail.com">renfasis@gmail.com</a><br/>Asunto: "Colaboración_nombre de tu propuesta".</p>
    
                        <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img linea_larga"/><br/><br/><br/>
    
                    </div>
                </div>
    
            </div>
        </div>
    );
}