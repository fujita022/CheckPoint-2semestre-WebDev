import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return ( 
        <>
        <div className="container-header">
                <div className="list-header">
                    <NavLink to='/' className={({isActive}) => isActive ?  'active' : '' }>Home</NavLink>
                    <NavLink to='/sobre' className={({isActive}) => isActive ?  'active' : '' }>Sobre</NavLink>
                    <NavLink to='/contato' className={({isActive}) => isActive ?  'active' : '' }>Contato</NavLink>
                </div>
        </div>
        </>
     );
}

export default Header;