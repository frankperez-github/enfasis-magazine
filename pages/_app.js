import Layout from '../components/DeskVersion/Layout'
import '../styles/Desk.css'
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const html = router.pathname === "/" ? "#cecece" : "white";

  return(

     
      <Layout>
        <div style={{backgroundColor: html}}>
        <Component {...pageProps} />
        </div>
      </Layout>
    

  );
}

export default MyApp
