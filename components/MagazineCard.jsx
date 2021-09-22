import Image from 'next/image';

const MagazineCard = ({magazine})=> {
    return (
        <div className="principal_div">

        <div className="princ_izq">

            <div className="big_rect">
                <Image src={magazine.images[0].image} width="6000%" height="8000%"/>
            </div>
                
            <div className="rectspeqs">

            {magazine.images.map(image=>{return <div className="RectPeq">
                    <Image src={image.image} width="350%" height="300%" className="small_rect"/>
                </div>})}
            </div>
                
        </div>

        <div className="princ_derch">

        <h1>Número {magazine.number}</h1>

            <div className="lineasubt">
                <Image src="/lineamenor.svg" width="300%" height="15%" />
            </div>

            <div className="inforev">
                <h3>{magazine.author}</h3><br/>
                <p>Colaboradores:</p>
                <p>{magazine.paragraph}</p>
            </div>

            <div className="downbutt">
                <a href={magazine.file} download={true} className="Downloadbutton">descargar</a>
            </div>    

        </div>
    </div>   
    )
}

export default MagazineCard