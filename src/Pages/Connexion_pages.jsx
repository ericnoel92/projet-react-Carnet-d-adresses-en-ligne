import React from 'react';
import Connexion from '../Components/Connexion'; // Chemin relatif pour l'importation

const ConnexionPage = () => {
  console.log('Rendering ConnexionPage component'); // Log pour vérifier le rendu du composant

  return (
    <div>
      <h1>Connexion</h1>
      <Connexion />
    </div>
  );
};

export default ConnexionPage;
