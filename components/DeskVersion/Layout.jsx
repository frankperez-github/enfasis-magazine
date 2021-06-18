import Image from 'next/image';
import {useRouter} from 'next/router';
import Head from 'next/head'
import Link from 'next/link'


export default function Layout(props){

    const router = useRouter()

   
    const display = router.pathname === "/" ? "none" : "block";
    const revista = router.pathname === "/Magazine" ? "pestana_actual" : "";
    const grafico = router.pathname === "/Graphic_Design" ? "pestana_actual" : "";
    const industrial = router.pathname === "/Industrial_Design" ? "pestana_actual" : "";
    const arquitectura = router.pathname === "/Architecture" ? "pestana_actual" : "";
    const creadores = router.pathname === "/Creators" ? "pestana_actual" : "";
    

    return(
        
        <div className="Layout">
            <div >
                <header style={{display: display}}>
                    
                    <div className="header-div">
                        
                        <div className="logorevista"> 

                            <Link href="/" className="a-to-home">
                                <Image src="/Logo_home.svg" width="300%" height="75%" className="logorevistasvg"/>
                            </Link>

                        </div>
                        
                        <nav className="nav_bar">
                            <Link href="/Graphic_Design" className="LinkNav">
                                <h2 className= {grafico}>diseño gráfico</h2>
                            </Link>

                            <Link href="/Industrial_Design" className="LinkNav">
                                <h2 className= {industrial}>diseño industrial</h2>
                            </Link>
                            
                            <Link href="/Architecture" className="LinkNav">
                                <h2 className= {arquitectura}>arquitectura</h2>
                            </Link>

                            <Link href="/Creators" className="LinkNav">
                                <h2 className= {creadores}>creadores</h2>
                            </Link>
                            <Link href="/Magazine" className="LinkNav">
                                <h2 className= {revista}>revista</h2>
                            </Link>
                        </nav>
                        
                    </div>
                </header>
                    
                <main>
                    {props.children}
                </main>
                
                <footer style={{display: display}}>
                
                    <div className="infofooter ">
            
                        <Link href="/About_Us"> 
                            <span>
                                SOBRE  <br/>
                                NOSOTROS
                            </span>
                        </Link>
            
            
                        <div className="networksft">
                            <a target="_blank" href="https://www.instagram.com/enfasismag" className="Insta">INSTAGRAM</a>
                            <a target="_blank" href="https://www.facebook.com/enfasismag">FACEBOOK</a>
                            <a target="_blank" href="https://www.twitter.com/enfasismag">TWITTER</a>
                        </div>
            
                        <Link href="/Privacy_Police">
                            <div className="span">
                                POLÍTICA <br/> DE PRIVACIDAD
                            </div>
                        </Link>

                        
                        <p>  &copy; énfasis <br/> 2020</p> 
            
                    </div>

                </footer>
            
            </div>
        </div>
    );

}