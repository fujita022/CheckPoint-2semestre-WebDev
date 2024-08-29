import './Planos.css'


function Planos({headerplanos, bodyplanosp,bodyplanosh6,bodyplanosh6preco, bodyplanosh6preco2, bodyplanosp2,bodyplanosh62,buttonplanos, headerColor, buttonColor, corTexto, borderColor, ImagemCard, ImagemSeta}) {
  return ( 
    <>
    <div className="cards-plano">
      <div className="layout-plano">
        <div className="header-planos" style={{backgroundColor: headerColor}}>
          <h1>{headerplanos}</h1>
        </div>
        <div className="body-planos">
          {ImagemCard ? (
            <div className="imagem-card-body">
              <img src={ImagemCard} alt="Imagem card" />
            </div>
          ): (
              <>
                <p>{bodyplanosp}</p>
                <img className='img-card-ultimo' src={ImagemCard} alt="" />
                <div className="seta-planos">
                <h6 className='preco-planos'>{bodyplanosh6} <h2>{bodyplanosh6preco}</h2></h6>
                <img src={ImagemSeta} alt="Imagem seta layout" />
                </div>
                <p>{bodyplanosp2}</p>
                <div className="seta-planos">
                <h6 className='preco-planos'>{bodyplanosh62} <h2>{bodyplanosh6preco2}</h2></h6>
                <img src={ImagemSeta} alt="Imagem seta layout" />
                </div>
              </>
          )}
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