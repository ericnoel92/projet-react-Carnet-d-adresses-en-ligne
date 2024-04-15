import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profil from './Profil';
import Nouveau_Contact from './Nouveau_Contact';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Maj_Utilisateur from './Maj_Utilisateur';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/profil" element={<Profil />} />
                <Route path="/Nouveau_Contact" element={<Nouveau_Contact />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/Inscription" element={<Inscription />} />
                <Route path="/Maj_Utilisateur" element={<Maj_Utilisateur />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;

