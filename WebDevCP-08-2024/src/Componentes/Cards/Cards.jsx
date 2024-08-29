import "./Cards.css";

function Cards({ numbercards, imgcards, titulocards, pgcards }) {
  return (
    <>
      <div className="card">
        <div className="layout-card">
          <div className="header-card">
          <div className="number-card">{numbercards}</div>
          <div className="img-card">
            <img src={imgcards} alt="" />
          </div>
          </div>
          <div className="texto-card">
          <div className="titulo-card">
            <h1>{titulocards}</h1>
          </div>
          <div className="paragrafo-card">
            <p>{pgcards}</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
