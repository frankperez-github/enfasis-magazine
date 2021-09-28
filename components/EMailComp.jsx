import Image from 'next/image'

function eMailComp(){


    function ShowForm(){
        document.getElementById('FormDesk').style.display="block";
        document.getElementById('Newsletter').style.display="block";
        document.getElementById('GeneralMenu').style.display="none";
    }
    
    return(
        <div className="">

            <div className="Letter-div" >
                <Image src="/Newsletter.svg" width="60%" height="46%" className="letterimg" onClick={ShowForm}/>
            </div>
            
            
        </div>
    );
    
}export default eMailComp;