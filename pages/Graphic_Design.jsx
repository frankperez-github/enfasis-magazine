import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';

import FormDesk from '../components/FormDesk'
import RevistaCard from '../components/RevistaCard';


export default function Graphic_Design({articles, arquitectura, industrial, creadores, revistas}){

    useEffect(()=>{console.log(articles);console.log(arquitectura)},[])
    return(
        <div className="Comp">
            

            <div className="Graphic_Design">

            <div className="SuperiorPart">
                <FormDesk />
                
                
            </div>
            
            <div style={{backgroundImage:`url(${articles[0].cover?articles[0].cover:'/Invited.jpg'})`}} className="PrincArt">
                <Link href={"/Articles/"+articles[0].id}>
                    <div className="PrincLink">
                        <div className="PrincipalArt">
                            <h2 className="PicByPrinc">por {articles[0].author}</h2>
                        </div>
                        <div className="CategoryLabelPrinc">
                            {articles[0].subcategory}
                        </div>
                        <div className="TittleLabelPrinc">
                          {articles[0].title}
                        </div>
                    </div>
                </Link>   
            </div>
            <div className="contenedor">

             <div className="Inviteds_line">
                  
                  <ArticleCard article={articles[1]}/> 
                  <ArticleCard article={articles[2]}/>
                
                </div>

             <div className="Inviteds_line">
                  
                  <ArticleCard article={articles[3]}/> 
                  <ArticleCard article={articles[4]}/>
                
                </div>
                
               
    
            
            </div>
            <div className="DownloadSection">
            <div className="Tittle">
                        <h1>Descarga Énfasis</h1>
                        
                        <div className="LineDownload">
                            <Image src="/linea.svg" width="3000%" height="50%" />
                        </div>
                        
                    </div>
            <div className="Download">
                <RevistaCard magazine={revistas[0]} />
                <RevistaCard magazine={revistas[1]}/>
            </div>
            </div>
        </div>
       
        </div>
    );
}

export const getServerSideProps = async()=>{
    const res = await fetch("https://enfasisapi.com/api")
    const articles = await res.json()
    const res2 = await fetch("https://enfasisapi.com/api/revistas")
    const revistas = await res2.json()
    
    return {
        props: {
            articles:articles.filter(article=>article.category.name=="Diseño Gráfico"),
            arquitectura: articles.filter(article=>article.category.name=="Arquitectura").slice(0,2),
            creadores:articles.filter(article=>article.category.name=="Creadores").slice(0,2),
            industrial:articles.filter(article=>article.category.name=="Diseño industrial").slice(0,2),
            revistas:revistas.slice(0,2)
        }
    }
}
