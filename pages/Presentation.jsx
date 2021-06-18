import Image from 'next/image';
import Link from 'next/link';



export default function Presentation(){

   
    return(
        
        <div className="Presentation">
            
            <div className="Networks">
                <div className="network-div">
                    <a href="https://www.instagram.com/enfasismag" target="_blank">
                        <div className="Link">
                            <Image src="/instagram_home.svg" width="100%" height="100%" />
                        </div>
                    </a>
                
                
                    <a href="https://www.facebook.com/enfasismag" target="_blank">
                        <div className="Link">
                            <Image src="/facebook_home.svg" width="100%" height="100%" />
                        </div>
                    </a>
                
                
                    <a href="https://www.twitter.com/enfasismag" target="_blank">
                        <div className="Link">
                            <Image src="/twitter_home.svg" width="100%" height="100%" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="Promo_Pic">
                <div className="pic-div">
                    <div id="ed3">
                        <Image src="/ed03_portada.jpg" width="400%" height="500%" />
                    </div>
                    
                    <div id="ed2">
                        <Image src="/ed02_portada.jpg" width="400%" height="500%" />
                    </div>
                    
                    <div id="ed1">
                        <Image src="/ed01_portada.jpg" width="400%" height="500%" />
                    </div>
                </div>
            </div>

            <div className="Nav_menu">
                <div className="WhiteLogo">
                    <Image src="/White_Logo.svg" width="200%" height="65%"/>
                </div>
                
                <div className="White_Stick">
                    <Image src="/White_Stick.svg" width="50%" height="80%" className="whiteStick"/>
                </div>
                
                
                <Link href="/Graphic_Design" >
                    <p className="Link1 LinkSect">diseño gráfico </p>
                </Link>

                <Link href="/Industrial_Design" >
                    <p className="Link2 LinkSect">diseño industrial</p>
                </Link>

                <Link href="/Architecture">
                    <p className="Link3 LinkSect">arquitectura</p>
                </Link>

                <Link href="/Creators">
                    <p className="Link4 LinkSect">creadores</p>
                </Link>
                
                <Link href="/Magazine">
                    <p className="Link5 LinkSect">revista</p>
                </Link>
                
                
            </div>
            
        </div>

    );
}