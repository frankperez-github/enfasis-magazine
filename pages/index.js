import Image from 'next/image';
import Link from 'next/link';
import Menu from '../components/MobileVersion/PresentationMenu';
import Head from 'next/head'


export default function Home({revistas}) {

  function ShowMenu(){
    document.getElementById('PresentationMenu').style.display="block";
}

  return (
      <div>

        <Head>
          <title>Énfasis Magazine</title>
          <meta name="description" content='La revista cubana "énfasis" es un producto comunicativo digital que se especializa en temas sobre diseño, arquitectura y arte. Además, cuenta con un equipo creativo que acoge a diseñadores gráficos e industriales, fotógrafos, periodistas y comunicadores sociales.Está concebida para ser una publicacion periódica en formato .pdf, disponible en su sitio web oficial y con presencia activa en las redes sociales más populares de Internet. Su contenido, sin exclusión ni politización, está destinado para un público nativo y foráneo que guste apreciar del trabajo de diseñadores, arquitectos y artistas cubanos. ' />
          <link rel="icon" href="/favicon.ico" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8282269104002025"
     crossorigin="anonymous"></script>
        </Head>
        

        <main >
          <div className="Presentation">

            <div className="Presentation_mob">

                <Menu />

                <div className="Nav_menu_Mob">
                    <div className="WhiteLogoMob">
                        <Image src="/White_Logo.svg" width="200%" height="65%"/>
                    </div>
                    <div className="Burger_menu" onClick={ShowMenu}>
                        <Image src="/Burger_Menu.svg" width="100%" height="100%" />
                    </div>
                </div>
            

            
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
            </div>

            <div className="Promo_Pic_Mob">
                <div className="pic-div">
                 {revistas.map(revista=>{return <div id="ed1">
                      <Image src={revista.cover} width="400%" height="500%" />
                  </div>})}
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


        </main>
      </div>
  )
}

export const getServerSideProps = async() => {
 const res = await fetch("https://enfasisapi.com/api/revistas")
 const revistas = await res.json()

 return {
     props: {
         revistas: revistas.slice(0,3)
     }
 }
}