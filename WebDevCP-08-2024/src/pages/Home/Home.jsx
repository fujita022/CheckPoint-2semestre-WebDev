import "./Home.css";
import HomeImg from "../../assets/home-imgs/HomeImg.png";
import Cards from "../../Componentes/Cards/Cards";

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

        <section>
          <div className="container-cards">
            <div className="cards-home">
              <Cards
                numbercards="01"
                imgcards=""
                titulocards="YouTube"
                pgcards="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
                className="card1"
              ></Cards>
              <Cards
                numbercards="02"
                imgcards=""
                titulocards="Tiktok"
                pgcards="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
              ></Cards>
              <Cards
                numbercards="03"
                imgcards=""
                titulocards="Facebook"
                pgcards="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
              ></Cards>
              <Cards
                numbercards="04"
                imgcards=""
                titulocards="Instagram"
                pgcards="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
              ></Cards>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
