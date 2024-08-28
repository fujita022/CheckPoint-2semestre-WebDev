import "./Home.css";
import HomeImg from "../../assets/home-imgs/HomeImg.png";
import Cards from "../../assets/home-imgs/Cards.png";

function Home() {
  return (
    <>
      <div className="container-home">
        <div className="home-page">
          <div className="container-home esquerda-home">
            <div className="secao-home">
              <div className="textos-home">
                <h1>Crie seus vídeos online</h1>
                <p>
                  Transforme suas ideias em filmes memoráveis: onde a
                  criatividade encontra a simplicidade.
                </p>
                <a href="#">Começar agora!</a>
              </div>
              <div className="direita">
                <div className="secao-direita">
                  <div className="img">
                    <img src={HomeImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      <section className="container-cards-home">    
          <img src={Cards} alt="" />
      </section>
      </div>
    </>
  );
}

export default Home;
