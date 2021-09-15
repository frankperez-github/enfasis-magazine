import Image from 'next/image';

const Quote = ({quote}) => {
    return(
        <div className="coment">

        <div className="vert_line">
            <Image src="/vertical_line.svg" width="100%" height="1000%" />
        </div>
        
        <div className="vert_lineMob">
            <Image src="/lineamenor.svg" width="1000%" height="100%"/>
        </div>

        <div className="text_com">
                <p>{quote.quote}</p>
                <p className="author"><b>{quote.author}</b></p><br/><br/>
        </div>

    </div>
    )
}

export default Quote