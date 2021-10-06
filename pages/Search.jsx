import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleCard from '../components/ArticleCard';
import Link from 'next/link'
import Image from 'next/image'

function Good_Search({articles}){

    const router = useRouter()
    const [articlesFiltered, setArticlesFiltered] = useState([])

    
    return(
        <div className="Comp">
       
        <div className="Good_Search">
            

            <div class="container_about_us">

            {articles.filter(article=>article.title.toLowerCase().includes(router.query.keyword.toLowerCase())).length>0? 
                <div class="results">
        
                    <h1>Resultados para: "<span>{router.query.keyword}"</span></h1>
            
                        
                    {articles.filter(article=>article.title.toLowerCase().includes(router.query.keyword.toLowerCase())).filter((article, index)=>index%2==0).map((article, index)=><div className="Inviteds_line">
                    <ArticleCard article={article}/>
                    </div>)}
                    
                </div>:
                 <div className="Failed_Search">
                
                 <div class="failed-div">
                     <div className="failed_svg">
                         <Image src="/failed.svg" width="200%" height="200%" />
                     </div>
                     <p>Lo sentimos, no hemos encontrado resultados para: "{router.query.keyword}<span/>".</p>
 
                     <div class="button-div">
                         <Link href="/">
                             <button class="failedbutton">Volver a la pagina principal</button>
                         </Link>
                     </div>
             
                 </div>
             
             </div>
                }

            </div>
            
            
        </div>
    </div>       
     

    );    
}export default Good_Search

export const getServerSideProps = async()=>{
    const res = await fetch("https://enfasisapi.com/api")
    const articles = await res.json()
    
    return {
        props: {
            articles
        }
    }
}
