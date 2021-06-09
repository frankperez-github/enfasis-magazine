import Image from 'next/image'

export default function Working(){
    return(
        <div className="Working">
            <h1>Work In Progress...</h1>

            <div className="faviconWork">
                <Image src="/favicon_1.ico" width="100%" height="100%" />
            </div>
        </div>
    );
}