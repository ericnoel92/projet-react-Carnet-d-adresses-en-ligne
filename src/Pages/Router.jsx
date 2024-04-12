import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import PageDeConnexion from'./Pages/PageDeConnexion';
//import PageDeProfil from'./Pages/PageDeProfil';
//import ListesDeContactes from'./pages/ListesDeContactes';
import CreationDeCompte from'./pages/CreationDeCompte';
import Connexion from'./Pages/Connexion';
function AppRouter() {
    return (
        <Router>
        {/* <Header /> */}
        <Routes>
        <Route path="/" element={<Connexion/>}/>
           <Route path="/" element={<CreationDeCompte/>}/>
        </Routes>
 </Router>
    );
}
export default AppRouter;