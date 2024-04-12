import { Link } from "react-router-dom";
import '../css/pages/notfound.css';

function NotFound() {
    return(
      <div className="not_found_texte">
        <p className="error-number">404</p>
        <p className="texte">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">Retourner sur la page d’accueil</Link>
      </div>
    )
  }
  
  export default NotFound;
  