import Image from 'next/image';
import Link from 'next/link';

export default function Menu(){

    function HideMenu(){
        document.getElementById('PresentationMenu').style.display="none";
    }

    return(
        <div id="PresentationMenu">
            <div className="CloseMenu">
                <div className="CloseIcon" onClick={HideMenu}>
                    <Image src="/failed.svg" width="100%" height="100%" />
                </div>
            </div>

            <div className="Menu-div">
                <div className="Stick">
                    <Image src="/stick.svg" width="100%" height="100%" />
                </div>

                <div className="menuNav">
                    <Link href="/Graphic_Design" >
                        <p className="LinkMobile">diseño gráfico </p>
                    </Link>

                    <Link href="/Industrial_Design" >
                        <p className="LinkMobile">diseño industrial</p>
                    </Link>

                    <Link href="/Architecture">
                        <p className="LinkMobile">arquitectura</p>
                    </Link>

                    <Link href="/Creators">
                        <p className="LinkMobile">creadores</p>
                    </Link>
                    
                    <Link href="/Magazine">
                        <p className="LinkMobile">revista</p>
                    </Link>
                </div>

                <div className="LinksMenu">
                    <div className="Link2Follow">
                        <a href="https://www.instagram.com/enfasismag" target="_blank" className="LinkArtMob"> 
                            <Image src="/instagram.svg" width="160%" height="150%" className="siguenos_img_mob"/>
                        </a>
                        
                        <a href="https://www.facebook.com/enfasismag" target="_blank" className="LinkArtMob">
                            <Image src="/facebook.svg" width="160%" height="150%" className="siguenos_img_mob"/>
                        </a>

                        <a href="https://www.twitter.com/enfasismag" target="_blank" className="LinkArtMob"> 
                            <Image src="/twitter.svg" width="160%" height="150%" className="siguenos_img_mob"/> 
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}