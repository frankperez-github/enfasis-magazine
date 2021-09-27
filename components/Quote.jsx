import Image from 'next/image';

const Quote = ({quote}) => {
    return(
        <div className="coment">
        

        <div className="text_com">
                <p>{quote.quote}</p>
                <p className="author"><b>{quote.author}</b></p>
        </div>

    </div>
    )
}

export default Quote