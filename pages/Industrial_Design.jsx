import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';

import FormDesk from '../components/FormDesk'
import RevistaCard from '../components/RevistaCard';


export default function Industrial_Design({articles, arquitectura, graphics, creadores, revistas}){

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
                  
             { articles.length>1 &&           <ArticleCard article={articles[1]}/> }
      { articles.length>2 &&             <ArticleCard article={articles[2]}/> }
                
                </div>

             <div className="Inviteds_line">
                  
             { articles.length>3 &&           <ArticleCard article={articles[3]}/> }
             { articles.length>4 &&           <ArticleCard article={articles[4]}/> }
                
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
            <div className="LineDown">
                        <Image src="/linea.svg" width="7000%" height="50%" />
                    </div>

            </div>

            <div className="contenedor">

<div className="Inviteds_line">
     
   { articles.length>5 &&  <ArticleCard article={articles[5]}/>  }
   { articles.length>6 &&   <ArticleCard article={articles[6]}/> }
   
   </div>

<div className="Inviteds_line">
     
{ articles.length>7 &&  <ArticleCard article={articles[7]}/> }
{ articles.length>8 &&   <ArticleCard article={articles[8]}/> }
     
   </div>
   </div>
   
   <div className="Tittle CreatorTittle">
                    <h1>Diseño Gráfico</h1>
                    
                    <div className="LineDownload">
                        <Image src="/linea.svg" width="3000%" height="50%" />
                    </div>
                    
                </div>

<div className="Inviteds_line">
     
     {   <ArticleCard article={graphics[0]}/>  }
     {    <ArticleCard article={graphics[1]}/> }
     
     </div>


     <div className="contenedor">

<div className="Inviteds_line">
     
   { articles.length>9 &&  <ArticleCard article={articles[9]}/>  }
   { articles.length>10 &&   <ArticleCard article={articles[10]}/> }
   
   </div>

<div className="Inviteds_line">
     
{ articles.length>11 &&  <ArticleCard article={articles[11]}/> }
{ articles.length>12 &&   <ArticleCard article={articles[12]}/> }
     
   </div>
   </div>
   

   <div className="Tittle CreatorTittle">
                    <h1>Arquitectura</h1>
                    
                    <div className="LineDownload">
                        <Image src="/linea.svg" width="3000%" height="50%" />
                    </div>
                    
                </div>

<div className="Inviteds_line">
     
     {   <ArticleCard article={arquitectura[0]}/>  }
     {    <ArticleCard article={arquitectura[1]}/> }
     
     </div>

     <div className="contenedor">

<div className="Inviteds_line">
     
   { articles.length>13 &&  <ArticleCard article={articles[13]}/>  }
   { articles.length>14 &&   <ArticleCard article={articles[14]}/> }
   
   </div>

<div className="Inviteds_line">
     
{ articles.length>15 &&  <ArticleCard article={articles[15]}/> }
{ articles.length>16 &&   <ArticleCard article={articles[16]}/> }
     
   </div>
   </div>
   <div className="Tittle CreatorTittle">
                    <h1>Creadores</h1>
                    
                    <div className="LineDownload">
                        <Image src="/linea.svg" width="3000%" height="50%" />
                    </div>
                    
                </div>

<div className="Inviteds_line">
     
     {   <ArticleCard article={creadores[0]}/>  }
     {    <ArticleCard article={creadores[1]}/> }
     
     </div>
     <div className="contenedor">

<div className="Inviteds_line">
     
   { articles.length>17 &&  <ArticleCard article={articles[17]}/>  }
   { articles.length>18 &&   <ArticleCard article={articles[18]}/> }
   
   </div>

<div className="Inviteds_line">
     
{ articles.length>19 &&  <ArticleCard article={articles[19]}/> }
{ articles.length>20 &&   <ArticleCard article={articles[20]}/> }
     
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
            articles:articles.filter(article=>article.category.name=="Diseño industrial"),
            arquitectura: articles.filter(article=>article.category.name=="Arquitectura").slice(0,2),
            creadores:articles.filter(article=>article.category.name=="Creadores").slice(0,2),
            graphics:articles.filter(article=>article.category.name=="Diseño Gráfico").slice(0,2),
            revistas:revistas.slice(0,2)
        }
    }
}
