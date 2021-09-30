import Link from 'next/link'

const ArticleCard = ({article}) => {
return (
    <Link href={"/Articles/"+article.id}>
    <div  style={{backgroundImage:`url(${article.cover?article.cover:'/Invited.jpg'})`}} className="Invitation_card">
        <h2 className="PicBy">
          por {article.author}
        </h2>
        
        <div className="invited">
            
        </div>
        <div className="NameLabel">
            <p>{article.subcategory}</p>
        </div>
        <p className="Invited-description">
            {article.title}
        </p>
    </div>
</Link>
)
}

export default ArticleCard