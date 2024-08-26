import './Home.css'
import HomeImg from '../../assets/home-imgs/HomeImg.png'
import Cards from '../../assets/home-imgs/Cards.png'

function Home() {
    return (
        <>
            <div className="container-home">
                <div className="container-home esquerda">
                    <div className="secao-esquerda">
                        <div className="titulo">
                            <h1>Crie seus vídeos online</h1>
                        </div>
                        <div className="sec subtitulo">
                            <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
                        </div>
                        <div className="sec botao">
                            <a href="#">Começar agora!</a>
                        </div>
                    </div>
                </div>

                <div className="container-home direita">
                    <div className="secao-direita">
                        <div className="img">
                            <img src={HomeImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="container-cards">
                <div className="cards">
                    <img src={Cards} alt="" />
                </div>
            </section>
        </>
    );
}

export default Home;