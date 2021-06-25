import Link from 'next/link';
import Image from 'next/image';
import Newsletter from './NewsLetter';

export default function GeneralMenu(){

    function HideMenu(){
        document.getElementById('GeneralMenu').style.display="none";
    }
    function ShowForm(){
        document.getElementById('Newsletter').style.display="block";
        document.getElementById('GeneralMenu').style.display="none";
    }

    return(
        <div className="Generalmenu">

            <Newsletter />

            <div id="GeneralMenu">
                <div className="CloseMenu">
                    <div className="CloseIcon" onClick={HideMenu}>
                        <Image src="/failed.svg" width="100%" height="100%" />
                    </div>
                </div>

                <div className="Menu-div">
                    
                    <div className="searchMob">

                        <div className="findicon">

                            <input type="search" placeholder="buscar" className="input-searchMob"/>
                                
                            <div className="to-searchMob">
                                <Image src="/Buscar.svg" width="70%" height="45%" />
                            </div>
                        

                        </div>

                        <div className="linea_search">
                            <Image src="/L_nea_44.svg" width="1000%" height="20%" />
                        </div>
                    
                    </div>
                    
                    <div className="menuNav">
                        <div className=""onClick={HideMenu}>
                            <Link href="/Graphic_Design" >
                                <p className="LinkMobile">diseño gráfico </p>
                            </Link>
                        </div>
                        <div className=""onClick={HideMenu}>
                            <Link href="/Industrial_Design" >
                                <p className="LinkMobile">diseño industrial</p>
                            </Link>
                        </div>
                        <div className=""onClick={HideMenu}>
                            <Link href="/Architecture">
                                <p className="LinkMobile">arquitectura</p>
                            </Link>
                        </div>

                        <div className=""onClick={HideMenu}>
                            <Link href="/Creators">
                                <p className="LinkMobile">creadores</p>
                            </Link>
                        </div>

                        <div className=""onClick={HideMenu}>
                            <Link href="/Magazine">
                                <p className="LinkMobile lastLinkMobile">revista</p>
                            </Link>
                        </div>
                    </div>

                    <div className="linksNets">

                        <div className="Letter-divMob" >
                            <Image src="/Newsletter.svg" width="100%" height="100%" className="letterimg"  onClick={ShowForm}/>
                        </div>
                        <div className="LinksMenu">
                            <div className="Link2FollowMob">
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
            </div>
        </div>
    );
}