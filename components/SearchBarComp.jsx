import Image from "next/image";


function SearchBarComp(){
    return(
        <div className="SearchBarComp">

            <div className="findicon">

                <input type="search" placeholder="buscar" className="input-search"/>
                    
                <div className="to-search">
                    <Image src="/Buscar.svg" width="50%" height="25%" />
                </div>


            </div>

        </div>
    );
} export default SearchBarComp;