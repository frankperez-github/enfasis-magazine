import { getURL, urlObjectKeys } from "next/dist/next-server/lib/utils"


const ImageCard = ({image}) => {

    return(
        <div className="pic_art">

            <div className="pic_art_img" style={{backgroundImage: `url(${image.image})`}}>
            
            </div>
            
            <h5 className="pie_foto">{image.caption}</h5>
            
        </div>
    )
} 

export default ImageCard