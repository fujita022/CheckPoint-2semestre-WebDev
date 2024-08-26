import './Contato.css'
import Twitter from '../../assets/Contato-images/Twitter.png'
import Instagram from '../../assets/Contato-images/instagram.png'
import Discord from '../../assets/Contato-images/discord.png'

function Contato() {
    return (
        <>
            <div className="container-contato">
                <div className="container-contato esquerda-contato">
                    <div className="esquerda-contato-texto">
                        <h1>Dúvidas e suporte, entre em contato:</h1>
                    </div>
                    <div className="esquerda-contato-images">
                        <img src={Twitter} alt="twitter img" />
                        <img src={Instagram} alt="twitter img" />
                        <img src={Discord} alt="twitter img" />
                    </div>
                </div>

                <div className="border"></div>

                <div className="container-contato direita-contato">
                    <div className="textos-contato-direita">
                        <div className="name-label-contato">
                            <p>Nome:</p>
                            <input type="hidden" name="name" />
                        </div>
                        <div className="email-label-contato">
                        <p>E-mail:</p>
                        <input type="hidden" name="email" />
                        </div>
                        <div className="msg-label-contato">
                            <p>Mensagem:</p><br />
                            <textarea cols="60" rows="15"></textarea>
                        </div>
                    </div>
                    <div className="enviar-botao-contato">
                        <a href="#">Enviar</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contato;