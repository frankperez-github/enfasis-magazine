import Image from 'next/image'
import AboutUsMob from '../components/MobileVersion/AboutUsMob';


function Us(){


    return(
           
    <div className="About_Us">

        <AboutUsMob />

        <div className="Nosotros">
    
            <div className="container_about_us">
    
                <div className="titular">
                    <div className="titular_izq">
                        <h1>ARTE<br/>DISEÑO & <br/>ARQUITECTURA</h1>
                    </div>
            
                    <div className="titular_derch">

                        <div className="lineamenor">
                            <Image src="/lineamenor.svg" width="400%" height="20%" />
                        </div>
                        <p>La revista cubana <b>énfasis</b> es un productop comunicativo digital que se especializa en temas sobre diseño, arquitectura y arteñ además, cuneta con un equipo creativo que acoge a diseñadores gráficos e industriales, fotógrafos, periodistas y comunicadores sociales.Está concebida para ser una publicacion periódica en formato .pdf, disponible en su sitio web oficial y con presencia activa en las redes sociales más populares de Internet.Su contenido, sin exclusión ni politización, está destinado para un público nativo y foráneo que guste apreciar del trabajo de diseñadores, arquitectos y artistas cubanos. </p>
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
    
                <div className="info_gral">
                        
                    <h1 className="the_next">Próximo<br/>Número</h1>
    
                    <div className="container_peq">
                        <p>Énfasis 03<br/><br/>
                        Temática: <b>El diseño UX en una sociedad digital.</b><br/><br/>
                        Publicación: <b>mayo 2021</b><br/></p>

                        <div className="lineamenor_body">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/><br/>
                        </div>

                        <p>Vamos camino a ser una sociedad digitalizada, vivimos en tiempos de teletrabajo y estudio a distancia. Éste es el momento perfecto para hablar sobre los productos digitales en Cuba, específicamente del diseño de experiencias de usuario o UX.</p>
    
                        <p>Ese medio que el usuario usa para comunicarse con una máquina, un equipo o una computadora; que abarca todos los puntos de contacto entre el usuario y el equipo. Normalmente suelen ser fáciles de entender y fáciles de accionar.</p>
                        <p>Siempre funciona así?</p>
                        <p>Alguna vez te has sentido perdido mientras navegas por una web o una aplicación?<br/><br/>Éste es tu momento para compartir tus experiencias.</p>
                        
                        <div className="lineamenor_body">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div>

                        <p>Primeras ideas: <b>20 de MARZO 2021.</b></p>
                        <p>Entrega final(Propuestas seleccionadas): <b>10 de ABRIL 2021</b></p>
                        

                        <div className="lineamenor_body">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div>

                        <p><b>Condiciones de Colaboración</b></p>
                        <p className="colab"><b>Si quieres colaborar en Énfasis debes saber que:</b></p> 
                        <ol>
                            <li>La edición gira en torno al tema presentado. A partir del mismo, cuentas con total libertad para tu propuesta.</li>
                            <li>El trabajo que entregues debe ser específico y exclusivo para Énfasis.</li>
                            <li>Énfasis no está obligada a publicar todos los trabajos que recibe.</li>
                            <li>Una vez aceptadas tus propuestas por la dirección editorial de Énfasis, debes cumplir los plazos pautados.</li>
                        </ol><br/>

                        <div className="lineamenor_body">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div>

                        <p><b>Formas de Participación</b></p>
                        <p>Textos: Ensayos, Crónicas, Relatos y Análisis.</p>
    
                        <p><b>Temas Sugeridos</b></p>
    
                        <ol>
                            <li>Ilustración: Todas las técnicas y Collage.</li>
                            <li>Fotografía: Arte, Moda, Paisaje, Arquitectura y Fotorreportaje.</li>
                            <li>Arte: Creadores contemporáneos de todos los ámbitos.</li>
                            <li>Arquitectura: Investigación, Teoría, Proyectos e Interiorismo.</li>
                        </ol>
                        
                        <div className="lineamenor_body">
                            <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img"/>
                        </div>

                        <p><b>Especificaciones</b></p>
                        <ol>
                            <li>Todos los textos enviados deben estar en español.</li>
                            <li>La entrega de las primeras ideas y así como la del artículo final consiste en un archivo Word (.doc) que debe ser nombrado "nombre de tu propuesta_nombre_apellido."</li>
                        </ol>
    
                        <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img linea_larga"/>
    
                        <p>PRIMERAS IDEAS & ENVIO DE ORIGINALES: <a href="mailto:renfasis@gmail.com">renfasis@gmail.com</a><br/>Asunto: "Colaboración_nombre de tu propuesta".</p>
    
                        <Image src="/lineamenor.svg" width="500%" height="10%" className="lineamenor_img linea_larga"/>
    
                    </div>
                </div>
    
            </div>
                
                
    
        </div>
    
    </div>
            
    );    
   
}export default Us