import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ArticleSection from '../../components/ArticleSection';
import Head from 'next/head'

export const getServerSideProps = async(context) => {

    const res = await fetch(`https://enfasisapi.com/api/${context.params.id}`)
    const article = await res.json()

    return {
        props : {
            article
        }
    }
}

const Article = ({article}) => {
    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ]
    const date = new Date(article.date_published)
    console.log(date)
    const router = useRouter()

    useEffect(()=>{
        console.log(router.asPath)
    },[])

 return (
     
    <div className="Comp">
         <Head>
          <title>{article.title}</title>
          <meta name="description" content={article.keywords} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        

    <div className="Article" id="article">
        
        <div className="main_article">

            <div className="info_art" >
                <div className="cont">
                    <div className="publicacion_art">
                        <div className="fecha">
                            <h5 className="fecha_public">Publicado el {date.getDay()} de {months[date.getMonth()]} del {date.getFullYear()}</h5> 
                        </div>
                        <div className="lineafecha">
                            <Image src="/linea_fecha.svg"
                            width="800%" height="60%" className="linea_fecha_img"/>
                        </div>
                    </div>
                </div>
                
            
                <div className="contenedor_art">  
                        
                    <p className="keywords">{article.subcategory}</p>
                    
                    <div className="contenedor_tit">
                        <h1>{article.title}</h1><br/>

                        <p>por {article.author}</p>

                        <div className="share-div">
                            <a href={`https://twitter.com/intent/tweet?url=https://enfasismag.com${router.asPath}`} className="share" target="_blank">
                                <div className="shareArt">
                                    <Image src="/Twitter_share.svg" width="50%" height="50%" />
                                </div>    
                            </a>

                            <a href={`http://www.facebook.com/sharer.php?u=https://enfasismag.com${router.asPath}`}  className="share" target="_blank">
                                <div className="shareArt">
                                    <Image src="/Facebook_share.svg" width="50%" height="50%" />
                                </div>    
                            </a>

                            <a href={`whatsapp://send?text=https://enfasismag.com${router.asPath}`} className="share" target="_blank">
                                <div className="shareArt">
                                    <Image src="/icono_whatsapp.svg" width="50%" height="50%" />
                                </div>    
                            </a>
                        </div>

                      

                    </div>
                    </div>     

                    
                            
                    {article.sections.sort((a,b)=>a.order<b.order?-1:1).map(section=><ArticleSection id={section.id} section={section}/>)}
                            

           
               

            </div>

            
            <div className="promo_colum">

                <div className="lineaPromo">
                    <Image src="/promo_column_img.svg" width="350%" height="50%" 
                    className="linea_promo"/>

                </div>

                <div className="siguenos">
                    <h2>Síguenos</h2>

                    <div className="LinkFollow">
                        <a href="https://www.instagram.com/enfasismag" target="_blank" className="LinkArt"> 
                            <Image src="/instagram.svg" width="60%" height="50%" className="siguenos_img"/>
                        </a>
                        
                        <a href="https://www.facebook.com/enfasismag" target="_blank" className="LinkArt">
                            <Image src="/facebook.svg" width="60%" height="50%" className="siguenos_img"/>
                        </a>

                        <a href="https://www.twitter.com/enfasismag" target="_blank" className="LinkArt"> 
                            <Image src="/twitter.svg" width="60%" height="50%" className="siguenos_img"/> 
                        </a>
                    </div>
                </div>

                <div className="lineaPromo">
                    <Image src="/promo_column_img.svg" width="350%" height="50%" className="linea_promo linea_promo2 "/>
                </div>

                <div className="reciente">


                    <h2>LO MÁS RECIENTE</h2>

                    <a href="">
                        <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                    </a>
                        
                    <a href="">
                        <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                    </a>
                    <a href="">
                        <p>Miguel Monkc: "No soy el ilustrador que todos creen que soy"</p>
                    </a>
            
                </div>

                

                <div className="home-button Home_art">
                    <Link href="#article" >
                        <Image src="/Boton_Art.svg" width="60%" height="60%" className="Home_art_img"/>
                    </Link>
                </div>

                <div className="public_pagada">
                    <div className="PromoImg">
                        <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                    </div>
                    
                    <div className="PromoImg">
                        <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                    </div>

                    <div className="PromoImg">
                        <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                    </div>

                    <div className="PromoImg">
                        <Image src="/promo_ejemplo.jpg" width="1000%" height="1300%"/>
                    </div>
                    
                </div>
            </div>

            
        </div>
    
    </div>

</div>
    
 )
}

export default Article