import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique de connexion, par exemple, envoi des données à un serveur
    console.log('Formulaire soumis avec les données :', formData);
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>Vous n'avez pas de compte ? <Link to="/CreationDeCompte">Création de compte</Link></p>
    </div>
  );
};

export default Connexion;
