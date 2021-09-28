import Image from 'next/image'

function EMailComp(){


    function ShowForm(){
        document.getElementById('Form').style.display="block";
        document.getElementById('Newsletter').style.display="block"
        document.getElementById('GeneralMenu').style.display="none";

        document.getElementById('success').style.display="none"
        document.getElementById('failed').style.display="none"
        document.getElementById('normalText').style.display="block"

        document.getElementById('BlackStick').style.display="block"
        document.getElementById('GreenStick').style.display="none"
        document.getElementById('form').style.display="block"
    }
    
    return(
        <div className="">

            <div className="Letter-div" >
                <Image src="/Newsletter.svg" width="60%" height="46%" className="letterimg" onClick={ShowForm}/>
            </div>

        </div>
    );
    
}export default EMailComp;