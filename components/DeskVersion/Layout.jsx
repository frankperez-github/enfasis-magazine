import Image from 'next/image';
import {useRouter} from 'next/router';
import Link from 'next/link'
import GeneralMenu from '../MobileVersion/GeneralMenu';
import SearchBarComp from '../SearchBarComp';
import EMailComp from '../EMailComp';


function Layout(props){

    const router = useRouter()

    function ShowMenu(){
        document.getElementById('GeneralMenu').style.display="block";
    }


   
    const display = router.pathname === "/" ? "none" : "block";
    const flex = router.pathname === "/" ? "none" : "flex";
    const revista = router.pathname === "/Magazine" ? "pestana_actual" : "";
    const grafico = router.pathname === "/Graphic_Design" ? "pestana_actual" : "";
    const industrial = router.pathname === "/Industrial_Design" ? "pestana_actual" : "";
    const arquitectura = router.pathname === "/Architecture" ? "pestana_actual" : "";
    const creadores = router.pathname === "/Creators" ? "pestana_actual" : "";


    return(
        
  
    <div className="Layout">

        
        <div >
            
            <GeneralMenu />

            <header style={{display: display}}>
                

                <div className="headerPh" id="top">
                    <div className="PhoneHeader">
                        <div className="logoPh">
                            <a href="/">
                                <Image src="/Logo_home.svg" width="500%" height="180%" />
                            </a>
                        </div>
                        <div className="MenuPh">
                            <Image src="/menu.svg" width="500%" height="500%" onClick={ShowMenu}/>
                        </div>
                    </div>
                </div>

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

            <div className="Search_Bar" id="beggining"  style={{display: flex}}>

                <div className="barra_izq">
        
                    <div className="links_redes">
        
                        <a href="https://www.instagram.com/enfasismag" target="_blank">
                            <div className="links2follow">
                                <Image src="/instagram.svg" width="100%" height="100%"/>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/enfasismag" target="_blank">
                            <div className="links2follow">
                                <Image src="/facebook.svg" width="100%" height="100%"/>
                            </div>
                        </a>
                        <a href="https://www.twitter.com/enfasismag" target="_blank">
                            <div className="links2follow">
                                <Image src="/twitter.svg" width="100%" height="100%"/>
                            </div> 
                        </a>
                        
                    </div>            
                    
                    <div className="LineaLinks">
                        <Image src="/L_nea_42.svg" width="300%" height="10%" />
                    </div>
                    
                </div>
        
                <div className="barra_derch">
        
        
                    <div className="search">
                        
                        <SearchBarComp />

                        <div className="linea_search">
                            <Image src="/L_nea_44.svg" width="1000%" height="20%" />
                        </div>
                        
                    
                    </div>
        
                    <div className="letter">

                        <EMailComp />
        
                        <div className="letter_line">
                            <Image src="/L_nea_43.svg" width="55%" height="5%" />
                        </div>
                        
        
                    </div>

                </div>
            </div>
            

            <main>
                {props.children}
                
            </main>
            
            <footer style={{display: display}}>

                <div className="footerPh">
                    <div className="PhoneFooter">
                        <div className="Line1Foot">
                            <Link href="/About_Us">
                                <div className="TextFooter">
                                    SOBRE <br/> NOSOTROS
                                </div>
                            </Link>

                            <div className="networks">
                                <a href="https://www.instagram.com/enfasismag" className="TextFooter" target="_blank">
                                    INSTAGRAM
                                </a><br/>
                                <a href="https://www.facebook.com/enfasismag" className="TextFooter" target="_blank">
                                    FACEBOOK
                                </a><br/>
                                <a href="https://www.twitter.com/enfasismag" className="TextFooter" target="_blank">
                                    TWITTER
                                </a>
                            </div>
                        </div>
                        
                        <div className="Line2Foot">
                            <Link href="/Privacy_Police">
                                <div className="TextFooter">
                                    POLÍTICA <br/> DE PRIVACIDAD
                                </div>
                            </Link>
                            
                            <p className="TextFooter" id="TextFooterID">
                                &copy; énfasis <br/> 2020
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div className="infofooter" >
        
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

}export default Layout;