import './Sobre.css'
import Cel1 from '../../assets/Sobre-imgs/cel-images/Cel1.png'
import Cel2 from '../../assets/Sobre-imgs/cel-images/Cel2.png'



function Sobre() {
    return (
        <>
            <div className="container-sobre">
                <div className="container-sobre esquerda-sobre">
                    <div>
                        <div className="textos-sobre">
                            <h1>Bem-vindo à revolução dos vídeos!</h1>
                            <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p><br /><br /><br />
                            <a href="#">Baixe o app</a>
                        </div>
                    </div>
                </div>

                <div className="container-sobre direita-sobre">
                    <div className="images-cel">
                        <img src={Cel2} alt="Imagem sobre" />
                        <img src={Cel1} alt="Imagem sobre 2" />
                    </div>
                </div>
            </div>

                <div className="container-fim-sobre">
                    <div className="imgs-fim">
                    </div>
                </div>
        </>
    );
}


export default Sobre;