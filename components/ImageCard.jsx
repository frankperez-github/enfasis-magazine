import Image from 'next/image';

const ImageCard = ({image}) => {

    return(
        <div className="pic_art">
                        <Image src={image.image} width="1000%" height="1000%" className="pic_art_img"/>

                        <h5 className="pie_foto">{image.caption}</h5>
                        <br />
                    </div>
    )
} 

export default ImageCard