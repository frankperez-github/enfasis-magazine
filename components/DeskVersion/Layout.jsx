import Image from 'next/image';
import {useRouter} from 'next/router';


export default function Layout(props){

    const router = useRouter()

    
    const display = router.pathname === "/" ? "none" : "block";
    

    return(
        
        <div className="Layout" >

            <header style={{display: display}}>
                <div className="header-div">
                    
                    <div className="logorevista"> 

                        <a href="#" className="a-to-home">
                            <Image src="/Logo_home.svg" width="300%" height="100%" className="logorevistasvg"/>
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
                        <a href="revista.html">
                            <h2>revista</h2>
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
        
    );

}