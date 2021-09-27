;
import FormDesk from '../components/FormDesk'
import Image from 'next/image'
import PrivacyPoliceMob from '../components/MobileVersion/PrivacyPoliceMob';

export default function Privacy_Police(){
    return(
        <div className="Comp">
            <PrivacyPoliceMob />
        
            <div className="Privacy_Police">
                <Search_Bar/>
                <FormDesk />
                <div className="contenedor">
                    <div className="titular">
                    <div className="titular_izq">
                        <h1>Política<br/> de Privacidad</h1>
                    </div>
            
                    <div className="titular_derch">

                        <div className="lineamenor">
                            <Image src="/lineamenor.svg" width="400%" height="20%" />
                        </div>
                        <p>Énfasis es un sitio al que se accede gratuitamente y que proprciona información confiable sobre el acontecer en el diseño, la arquitectura y el arte, en Cuba u otras partes del mundo. Este sitio ha sido desarrollado y es actualizado por el equipo editorial de Revista Énfasis.
                            <br/>
                            <br/>      
                        Mediante la presente Política de Privacidad se establecen términos en que Énfasis usa y protege la información que es proporcionada por sus usuarios al momento de utilizar el sitio web. Estamos comprometidos con la seguridad de los datos de nuestros lectores.
                            <br/>
                            <br/>
                        Cuando le pedimos llenar los campos con información personal con la cual usted pueda ser identificad, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.              
                        </p>
                    </div>
                </div>
                
                    <div className="Parraf">
                        <h2>Información recogida y para qué podemos usarla</h2>

                        <p>
                            Nuestro sitio web podrá recoger los datos personales que usted le brinde, pues para visitar el sitio no es necesario proporcionar información alguna.
                                <br/>
                                <br/>
                            En caso de que usted requiera la opción de suscribirse a nuestro sitio para tener acceso a otros servicios no incluidos en el portal de Énfasis, es posible que sean enviados a su correo electrónico otros, con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio. Estos correos electrónicos serán enviados a la dirección que usted proprcione y podrán ser cancelados en cualquier momento.
                                <br/>
                                <br/>
                            Énfasis está comprometida con mantener su información segura. Utilizamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado a sus datos.
                                <br/>
                                <br/>
                            Si usted acepta recibir nuestro boletín o publicidad puede cancelarla en cualquier momento.
                                <br/>
                                <br/>
                            Énfasis no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, slavo en caso de una situación excepcional.
                        </p>

                    </div>

                    <div className="Parraf">
                        <h2>Enlaces a terceros</h2>

                        <p>
                            Énfasis puede contener enlaces a otros sitios que quizá sean de su interés. Una vez que usted haga clic en dichos enlaces y abandone nuestra página no nos hacemos responsables por la protección de sus datos. Estos sitios rigen por sus propias políticas de privacidad y términos de uso. Es recomendable que consulte antes de cliquear para  confirmar que usted está de acuerdo con ellos.
                        </p>
                    </div>

                    <div className="Parraf">
                        <h2>Usos de Cookies</h2>

                        <p>
                            Una cookie son pequeños archivos que se almacenan en su ordenador. Si usted acepta este fichero pues tendrá infromación relativa al tráfico web y le permitirá el acceso más cómodo para futuras visitas en una web recurrente.
                                <br/>
                                <br/>
                            Otra función que tienen las cookies es que con ellas las webs pueden reconocerle individualmente y por tanto brindarle em mejor servicio personalizado.
                                <br/>
                                <br/>
                            Énfasis emplea las cookies para identificar las páginas web que son visitadas y con qué frecuencia. Esta información es empleada únicamente para análisis estadístico, después se elimina de forma permanente.
                                <br/>
                                <br/>
                            Las cookies también le ayudan a proporcionar un mejor servicio de los sitios web. No debe preocuparse pues no dan acceso a información ni de su ordenador, ni suya, a menos que así usted lo decida y la proporcione directamente.
                                <br/>
                                <br/>
                            Usted puede eliminar las cookies en cualquier momento desde su ordenador. Tambiñen puede cambiar la configuración de su prdenador para declinar las cookies. <br/>
                            Debe tener en cuenta que si declinan es posible que no pueda utilizar algunos de nuestros servicios.
                        </p>
                    </div>

                    <div className="Parraf">
                        <h2>Seguridad y advertencia legal</h2>

                        <p>
                            Énfasis y las entidades que presten por cuenta de ésta servicios de tratamiento de datos, han adoptado y adoptarán todas las medidas técnicas de seguridad que se encuentren a su alcance, de conformidad con lo establecido por la legislación vigente, y los más altos estándares tecnológicos del mercado, a fin de garantizar al máximo la seguridad y confidencialidad de las comunicaciones y, por consiguiente, de los datos de carácter personal proporcionados.
                                <br/>
                                <br/>
                            Por razones de seguridad del sitio y para garantizar que este servicio esté disponible a todos los usuarios, mantenemsi programas de software para controlar el tráfico e identificar acciones no autorizadas.
                                <br/>
                                <br/>
                            Énfasis declara que es titular o ha adquirido la licencia o permisos requeridos para la utilización de cualquiera de los Derechos de Propiedad Intelectual utilizados en la revista. Rn tal sentido Énfasis se reserva el derecho de suspender el servicio o en su caso interponer una reclamación o demanda a quien o quienes utilicen sin la debida autorización, cualquier elemento que aparezca en el sitio.
                                <br/>
                                <br/>
                            Énfasis se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
    );
}