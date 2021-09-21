import ImageCard from "./ImageCard"
import Quote from "./Quote"

const ArticleSection = ({section}) => {
    return(
        <div className="">
    <div className="contenedor_art">
<h3>{section.title}</h3>
<br />
 {section.paragraphs.map(para=><p key = {para.id}>{para.paragraph}</p>)}
 
 {section.images.map(image=><ImageCard key={image.id} image={image}/>)}
 </div>
 {section.quotes.map(quote=><Quote key={quote.id} quote={quote}/>)}
 <br />
 
 </div>
    )
}

export default ArticleSection