import Link from 'next/link';
import Image from 'next/image';

const RevistaCard = ({magazine})=> {
    return (
      
        <div className="Download_Card">

            <div className="DownloadCardImg">
                <Image src={magazine.cover} width="2300%" height="2700%" />
            </div>

            <div className="Info-to-Download">

                <div className="tittle">
                    
                    <h1>Número {magazine.number}</h1>

                    <div className="tittle_image">
                        <Image src="/lineamenor.svg" width="500%" height="20%" />
                    </div>

                    <h4>{magazine.author}</h4>

                </div>

                <div className="ButtonsDownload">

                    <Link href="/Magazine">
                        <p  className="BlackButton DownButt">ver más</p>
                    </Link>

                    <br/>

                    <a href={magazine.file} download={true}>
                        <p className="BlackButton DownButt">descargar</p>
                    </a>
                    
                </div>

            </div>
        </div>

    )
}

export default RevistaCard