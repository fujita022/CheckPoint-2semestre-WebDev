import './Planos.css'


function Planos({headerplanos, bodyplanosp,bodyplanosh6, bodyplanosp2,bodyplanosh62,buttonplanos, headerColor, buttonColor, corTexto, borderColor, ImagemCard, ImagemSeta}) {
  return ( 
    <>
    <div className="cards-plano">
      <div className="layout-plano">
        <div className="header-planos" style={{backgroundColor: headerColor}}>
          <h1>{headerplanos}</h1>
        </div>
        <div className="body-planos">
          <p>{bodyplanosp}</p>
          <img src={ImagemCard} alt="" />
          <div className="seta-planos">
          <h6>{bodyplanosh6}</h6>
          <img src={ImagemSeta} alt="Imagem seta layout" />
          </div>
          <p>{bodyplanosp2}</p>
          <div className="seta-planos">
          <h6>{bodyplanosh62}</h6>
          <img src={ImagemSeta} alt="Imagem seta layout" />
          </div>
        </div>
        <div className="button-cadastrar-planos" style={{backgroundColor: buttonColor, color: corTexto, border: borderColor}}>
          {buttonplanos}
        </div>
      </div>
      </div>
    </>
   );
}

export default Planos;