import Presentation from "./Presentation";
import Presentation_mob from "./Presentation_mob";
import Head from 'next/head'


export default function Home() {

  return (
      <div>

        <Head>
          <title>Énfasis Magazine</title>
          <meta name="description" content="Generated with create next app by Frank Pérez,Adrian Valdés and David Li" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        

        <main >
          <Presentation />

          <Presentation_mob />
        </main>
      </div>
  )
}
