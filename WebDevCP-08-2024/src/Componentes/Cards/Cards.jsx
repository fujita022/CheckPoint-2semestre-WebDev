import './Cards.css'

function Cards({numbercards, imgcards, titulocards, pgcards}) {
    return ( 
        <>
            <div className="cards-home">
                <div className="number-card">
                    {numbercards}
                </div>
                <div className="img-card">
                    <img src={imgcards} alt="" />
                    
                </div>
                <div className="titulo-card">
                    <h1>{titulocards}</h1>
                </div>
                <div className="paragrafo-card">
                    <p>{pgcards}</p>
                </div>
            </div>
        </>
     );
}

export default Cards;