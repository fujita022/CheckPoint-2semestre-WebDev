import './Sobre.css'
import Cel1 from '../../assets/Sobre-imgs/cel-images/Cel1.png'
import Cel2 from '../../assets/Sobre-imgs/cel-images/Cel2.png'
import Planos from '../../Componentes/Planos/Planos';
import SetaSobre from '../../assets/Sobre-imgs/sobre-seta.png'
import ImagemCard from '../../assets/Sobre-imgs/img-planos-card.png'

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

            <section>
                <div className="container-planos">
                    <div className="title-plano">
                    <h1>Planos</h1>
                    </div>
                    <div className="planos-sobre">
                        <Planos
                            headerplanos={'Individual'}
                            bodyplanosp={'1 Usuário'}
                            bodyplanosh6={'10 Vídeos'}
                            bodyplanosh6preco={'R$15'}
                            buttonplanos={'Cadastrar'}
                            ImagemSeta={SetaSobre}
                            ></Planos>
                        <Planos
                            headerplanos={'Profissional - Times'}
                            headerColor= '#EBE9E9'
                            bodyplanosp={'1-10 Usuários'}
                            bodyplanosh6={'Vídeos ilimitados'}
                            bodyplanosh6preco={'R$40'}
                            bodyplanosp2={'+10 Usuários'}
                            bodyplanosh62={'Vídeos ilimitados'}
                            bodyplanosh6preco2={'R$20'}
                            buttonplanos={'Cadastrar'}
                            buttonColor={'#fff'}
                            corTexto={'#2F2E41'}   
                            borderColor={'1px solid #929292'}
                            ImagemSeta={SetaSobre}
                        ></Planos>
                        <Planos
                           headerplanos={'Corporativo'}
                           headerColor= '#EBE9E9'
                           buttonplanos={'Entre em contato'}        
                           ImagemCard={ImagemCard}
                           buttonColor={'#fff'}    
                           corTexto={'#2F2E41'}      
                           borderColor={'1px solid #929292'}
                        ></Planos>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Sobre;