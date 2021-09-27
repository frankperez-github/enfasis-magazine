import Image from 'next/image'

function PresentationImages (){
    return(
        <div className="">
            <div id="ed3">
                <Image src="/ed03_portada.jpg" width="400%" height="500%" />
            </div>
            
            <div id="ed2">
                <Image src="/ed02_portada.jpg" width="400%" height="500%" />
            </div>
            
            <div id="ed1">
                <Image src="/ed01_portada.jpg" width="400%" height="500%" />
            </div>
        </div>
    );
}export default PresentationImages;