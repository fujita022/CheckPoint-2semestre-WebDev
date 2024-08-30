import "./Home.css";
import HomeImg from "../../assets/home-imgs/HomeImg.png";
import Cards from "../../Componentes/Cards/Cards";
import Youtube from '../../assets/home-imgs/youtube.png'
import Tiktok from '../../assets/home-imgs/tiktok.png'
import Instagram from '../../assets/home-imgs/instagram.png'
import Facebook from '../../assets/home-imgs/facebook.png'


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
                    <img src={HomeImg} alt="Imagem hero Home" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

              </div>
        <section>
            <div className="cards-home">
              <Cards
                numbercards="01"
                imgcards={Youtube}
                titulocards="YouTube"
                pgcards="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
                className="card1"
              ></Cards>
              <Cards
                numbercards="02"
                imgcards={Tiktok}
                titulocards="Tiktok"
                pgcards="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
                backgroundColor="#F9EB98"
              ></Cards>
              <Cards
                numbercards="03"
                imgcards={Facebook}
                titulocards="Facebook"
                pgcards="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
                backgroundColor='#C0D9DD'
              ></Cards>
              <Cards
                numbercards="04"
                imgcards={Instagram}
                titulocards="Instagram"
                pgcards="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
                backgroundColor='#6975E8'
              ></Cards>
            </div>
        </section>
    </>
  );
}

export default Home;
