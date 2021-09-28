import Presentation from "./Presentation";
import Presentation_mob from "./Presentation_mob";
import Head from 'next/head'


export default function Home() {

  return (
      <div>

        <Head>
          <title>Énfasis Magazine</title>
          <meta name="description" content='La revista cubana "enfasis" es un producto comunicativo digital que se especializa en temas sobre diseño, arquitectura y arte. Además, cuenta con un equipo creativo que acoge a diseñadores gráficos e industriales, fotógrafos, periodistas y comunicadores sociales.Está concebida para ser una publicacion periódica en formato .pdf, disponible en su sitio web oficial y con presencia activa en las redes sociales más populares de Internet. Su contenido, sin exclusión ni politización, está destinado para un público nativo y foráneo que guste apreciar del trabajo de diseñadores, arquitectos y artistas cubanos. ' />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        

        <main >
          <Presentation />

          <Presentation_mob />
        </main>
      </div>
  )
}
