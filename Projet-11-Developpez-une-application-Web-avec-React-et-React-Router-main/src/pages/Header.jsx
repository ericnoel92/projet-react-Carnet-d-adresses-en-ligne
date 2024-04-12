import '../css/pages/header.css';
import logo_header from '../img/logo_header.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <img className='logo-header' src={logo_header} alt='logo' />
            <nav className='menu-header'>
                <ul>
                    <li className='acceuil'><Link to="/">Accueil</Link></li>
                    <li className='apropos'><Link to="/Apropos">A Propos</Link></li>
                </ul>
            </nav>
        </div>
    );
}
        
export default Header;
  