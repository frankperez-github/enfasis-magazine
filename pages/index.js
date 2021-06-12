import Presentation from "./Presentation";
import Head from 'next/head'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Énfasis Magazine</title>
        <meta name="description" content="Generated with create next app by Frank Pérez,Adrian Valdés y David Li" />
        <link rel="icon" href="/favicon_1.ico"/>
      </Head>

      <main >
        <Presentation />

      </main>
    </div>
  )
}
