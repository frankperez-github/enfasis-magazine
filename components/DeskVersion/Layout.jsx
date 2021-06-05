import Image from 'next/image';
import {useRouter} from 'next/router';
import Head from 'next/head'
import Link from 'next/link'


export default function Layout(props){

    const router = useRouter()

    
    const display = router.pathname === "/" ? "none" : "block";
    const revista = router.pathname === "/Magazine" ? "pestana_actual" : "";
    const grafico = router.pathname === "/Graphic_Design" ? "pestana_actual" : "";
    const industrial = router.pathname === "/Idustrial_Design" ? "pestana_actual" : "";
    const arquitectura = router.pathname === "/Architecture" ? "pestana_actual" : "";
    const creadores = router.pathname === "/Ceators" ? "pestana_actual" : "";
    

    return(
        
        <div className="Layout">
            <Head>
                <title>Énfasis Magazine</title>
                <meta name="description" content="Generated with create next app by Frank Pérez,Adrian Valdés y David Li" />
                <link rel="icon" href="/favicon_1.ico" />
            </Head>
        
        
            <div>
                <header style={{display: display}}>
                    
                    <div className="header-div">
                        
                        <div className="logorevista"> 

                            <Link href="/" className="a-to-home">
                                <Image src="/Logo_home.svg" width="300%" height="75%" className="logorevistasvg"/>
                            </Link>

                        </div>
                        
                        <nav className="nav_bar">
                            <a href="">
                                <h2 className= {grafico}>diseño gráfico</h2>
                            </a>

                            <a href="#">
                                <h2 className= {industrial}>diseño industrial</h2>
                            </a>
                            
                            <a href="#">
                                <h2 className= {arquitectura}>arquitectura</h2>
                            </a>

                            <a href="#">
                                <h2 className= {creadores}>creadores</h2>
                            </a>
                            <a href="/Magazine">
                                <h2 className= {revista}>revista</h2>
                            </a>
                        </nav>
                        
                    </div>
                </header>
                    
                <main>
                    {props.children}
                </main>
                
                <footer style={{display: display}}>
                
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
            
            </div>
        </div>
    );

}