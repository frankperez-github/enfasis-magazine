import Image from 'next/image';
import Link from 'next/link';



export default function Presentation(){



    return(
        
        <div className="Presentation">
            

            <div className="Networks">
                
                <Link href="https://www.instagram.com/enfasismag" > 
                    <Image src="/instagram_home.svg" width="60%" height="50%" className="Link_net"/>
                </Link>
                <Link href="https://www.facebook.com/enfasismag" >
                    <Image src="/facebook_home.svg" width="60%" height="50%"className="Link_net"/>
                </Link>
                <Link href="https://www.twitter.com/enfasismag" > 
                    <Image src="/twitter_home.svg" width="60%" height="50%"className="Link_net"/> 
                </Link>
                     
            </div>

            <div className="Promo_Pic">

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

            <div className="Nav_menu">
                <Image src="/White_Logo.svg" width="200%" height="65%"/>

                <Image src="/White_Stick.svg" width="50%" height="80%" className="whiteStick"/>

                <Link href="" >
                    <p className="Link1">diseño gráfico </p>
                </Link>

                <Link href="" >
                    <p className="Link2">diseño industrial</p>
                </Link>

                <Link href="">
                    <p className="Link3">arquitectura</p>
                </Link>

                <Link href="">
                    <p className="Link4">creadores</p>
                </Link>
                
                <Link href="">
                    <p className="Link5">revista</p>
                </Link>
            </div>
            


        </div>

    );
}