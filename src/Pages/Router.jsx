import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnexionPage from './ConnexionPage';
import CreationDeComptePage from './CreationDeComptePage';
import ListesDeContactes from './ListesDeContactes';
import PageDeProfil from './PageDeProfil';
import FormulaireDeCreationDeCompte from './FormulaireDeCreationDeCompte';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/connexion" element={<ConnexionPage />} />
                <Route path="/creation-de-compte" element={<CreationDeComptePage />} />
                <Route path="/listes-de-contactes" element={<ListesDeContactes />} />
                <Route path="/page-de-profil" element={<PageDeProfil />} />
                {/* Ajoutez d'autres routes ici */}
            </Routes>
        </Router>
    );
}

export default AppRouter;
