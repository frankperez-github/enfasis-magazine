import Image from "next/image";
import { useRouter } from 'next/router'
import { useState } from "react";

function SearchBarComp(){

    const [keyword, setKeyword] = useState("")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/Good_Search/?keyword=${keyword}`)
    }

    return(
        <div className="SearchBarComp">

            <form onSubmit={handleSubmit} className="findicon">

                <input value={keyword} onChange={(e)=>{setKeyword(e.target.value)}} required={true} type="search" placeholder="buscar" className="input-search"/>
                    
                <div className="to-search">
                  <button  type="submit" className="searcher"><Image src="/Buscar.svg" width="50%" height="25%" /></button>  
                </div>


            </form>

        </div>
    );
} export default SearchBarComp;