import ImageCard from "./ImageCard"
import Quote from "./Quote"

const ArticleSection = ({section}) => {
    return(
        <div className="">
    <div className="contenedor_art">
<h3>{section.title}</h3>
<br />
 {section.paragraphs.map(para=><p>{para.paragraph}</p>)}
 
 {section.images.map(image=><ImageCard image={image}/>)}
 </div>
 {section.quotes.map(quote=><Quote quote={quote}/>)}
 <br />
 
 </div>
    )
}

export default ArticleSection