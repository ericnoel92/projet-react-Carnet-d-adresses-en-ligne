import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion_pages from './Pages/Connexion_pages';
// import Creation_De_Compte from './Pages/Creation_De_Compte';
//import Listes_De_Contactes from './Pages/Listes_De_Contactes';
// import Page_De_Profil from './Pages/Page_De_Profil';


function AppRouter() {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/connexion" element={<Connexion_pages />} />
                {/* Autres routes ici */}
            </Routes>
        </Router>
    );
}

export default AppRouter;

