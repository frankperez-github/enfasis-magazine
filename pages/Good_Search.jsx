import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function Good_Search({articles}){

    const router = useRouter()
    const [articlesFiltered, setArticlesFiltered] = useState([])

    useEffect(()=>{
       setArticlesFiltered(articles.filter(article=>article.title.toLowerCase().includes(router.query.keyword.toLowerCase())))
       console.log(articles)
       console.log(articlesFiltered)
      setArticlesFiltered(articlesFiltered.map((article, index)=>{ return {...article, ind:index}})) 

       console.log(articlesFiltered)
    },[])
    return(
        <div className="Comp">
       
        <div className="Good_Search">
            

            <div class="container_about_us">
        
                <div class="results">
        
                    <h1>Resultados para: "{router.query.keyword}"<span/></h1>
            
                        
                    {articlesFiltered.filter((article, index)=>index%2==0).map((article, index)=><div className="Inviteds_line">
                    <ArticleCard article={article}/>{(article.ind<articles.length-1) && <ArticleCard article={articles[article.ind+1]}/>}
                    </div>)}
                    
                </div>
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
