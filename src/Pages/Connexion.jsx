import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagedeconnexion = () => {
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
        // Envoi du formulaire à l'API pour connecter l'utilisateur
        fetch('http://localhost:3030/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Réinitialisation du formulaire après soumission si nécessaire
            setFormData({
                email: '',
                password: ''
            });
            // Gérer la réponse de l'API ici, par exemple, rediriger l'utilisateur vers la page de profil si la connexion est réussie
            console.log(data); // Vous pouvez traiter la réponse de l'API ici
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'black', padding: '20px', width: '100%' }}>
                <img src="Image/logo.png" alt="Logo" />
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h1>Connexion</h1>
            </div>
            <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <Link to="/Profil">
                    <button type="submit">Submit</button>
                    </Link>
                </form>
            </div>
             </div>
    );
};

export default Pagedeconnexion;
// fais
