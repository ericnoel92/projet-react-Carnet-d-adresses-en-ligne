import React, { useState } from 'react';

const CreationDeCompte = () => {
    // utilisation des hooks
    const [formData, setFormData] = useState({ 
        username: '',
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
        // Traitement des données du formulaire (par exemple, envoi à un serveur)
        console.log(formData);
    };

    return (
        <div>
            <h1>Creation de compte</h1>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">E-mail :</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Créer un compte</button>
            </form>
        </div>
    );
};

export default CreationDeCompte;
