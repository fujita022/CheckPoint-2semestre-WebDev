import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <>
        <div className="container-header">
                <div className="list-header">
                    <Link to='/'>Home</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </div>
        </div>
        </>
     );
}

export default Header;