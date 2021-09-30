import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';

import FormDesk from '../components/FormDesk'


export default function Graphic_Design({articles}){

    useEffect(()=>{console.log(articles);console.log(articles.filter((article, index)=>index%2!=0))},[])
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

              {articles.filter((article, index)=>index%2!=0).map((article, index)=><div className="Inviteds_line">
                  
                  <ArticleCard article={article}/>{(article.ind<articles.length-1) && <ArticleCard article={articles[article.ind+1]}/>}
                
                </div>)}
               
    
            
            </div>
        </div>
       
        </div>
    );
}

export const getServerSideProps = async()=>{
    const res = await fetch("https://enfasisapi.com/api")
    const articles = await res.json()
    
    return {
        props: {
            articles:articles.map((article, index)=>{ return {...article, ind:index}})
        }
    }
}
