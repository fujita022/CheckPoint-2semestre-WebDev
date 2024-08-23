import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <>
        <div className="container-header">
                <div className="list-header">
                    <div className='home-button'><h6>Home</h6></div>
                    <div className="sobre-button"><h6>Sobre</h6></div>
                    <div className="contato-button"><h6>Contato</h6></div>
                </div>
        </div>
        </>
     );
}

export default Header;