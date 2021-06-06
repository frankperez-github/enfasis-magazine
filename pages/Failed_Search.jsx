import Image from 'next/image'



function Failed_Search(){


    return(

        <div className="Failed_Search-div">
            
            <div class="failed-div">

                <Image src="/failed.svg" width="100%" height="100%" className="failedimg" />

                <p>Lo sentimos, no hemos encontrado resultados para"<h2/>".</p>

                <div class="button-div">
                    <a href="home.html">
                        <button class="failedbutton">Volver a la pagina principal</button>
                    </a>
                </div>
        
            </div>
        
        </div>
        
    );
}export default Failed_Search;
