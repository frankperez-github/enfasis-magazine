import Image from 'next/image';
import Menu from "../components/MobileVersion/PresentationMenu";
import PresentationImages from '../components/PresentationImages';


    
export default function Presentation_mob(){
    
    function ShowMenu(){
        document.getElementById('PresentationMenu').style.display="block";
    }

    return(

        
    <div className="PresentationComp" >
        
        <div className="Presentation_mob">
           
           <div className="Nav_menu_Mob">
                <div className="WhiteLogoMob">
                    <Image src="/White_Logo.svg" width="200%" height="65%"/>
                </div>
                <div className="Burger_menu" onClick={ShowMenu}>
                    <Image src="/Burger_Menu.svg" width="100%" height="100%" />
                </div>
            </div>

            

            <div className="Promo_Pic_Mob">
                <div className="pic-div_mob">
                   <PresentationImages />
                </div>
            </div>

           
            <div className="NetworksMob">
                <div className="network_div">
                    
                    <a href="https://www.instagram.com/enfasismag" target="_blank">
                        <div className="LinkMob">
                            <Image src="/instagram_home.svg" width="100%" height="100%" />
                        </div>
                    </a>
                
                
                    <a href="https://www.facebook.com/enfasismag" target="_blank">
                        <div className="LinkMob">
                            <Image src="/facebook_home.svg" width="100%" height="100%" />
                        </div>
                    </a>
                
                
                    <a href="https://www.twitter.com/enfasismag" target="_blank">
                        <div className="LinkMob">
                            <Image src="/twitter_home.svg" width="100%" height="100%" />
                        </div>
                    </a>
                                    
                </div>
            </div>
        </div>

        <Menu />
    </div>    
    );
}