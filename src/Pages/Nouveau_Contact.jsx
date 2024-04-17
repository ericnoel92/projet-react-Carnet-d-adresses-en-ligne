import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NewContact = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Pour contrôler l'affichage de la redirection après soumission

    const handleFinaliserClick = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire
        // Vérifie si tous les champs sont remplis
        if (nom.trim() !== '' && email.trim() !== '') {
            // Création de l'objet contact
            const newContact = {
                nom: nom,
                email: email
            };

            // Envoi des données du formulaire à l'API
            fetch('http://localhost:3030/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newContact)
            })
            .then(response => response.json())
            .then(data => {
                // Réinitialisation des champs du formulaire
                setNom('');
                setEmail('');
                // Définit l'état pour afficher la redirection après soumission
                setIsSubmitted(true);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
        }
    };

    // Détermine si le bouton de soumission doit être désactivé
    const isSubmitDisabled = nom.trim() === '' || email.trim() === '';

    return (
        <div>
            <div style={{ backgroundColor: 'black', padding: '20px', textAlign: 'left' }}>
                <img src="Image/logo.png" alt="Logo" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Nouveau Contact</h1>
                <div style={{ width: '50%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <form onSubmit={handleFinaliserClick}>
                        <label style={{ marginBottom: '10px' }}>
                            Nom:
                            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                        </label>
                        <label style={{ marginBottom: '10px' }}>
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        {/* Bouton de soumission du formulaire utilisant le composant Link */}
                        <Link to="/Home">
                            <button type="submit" style={{ marginTop: '10px' }} disabled={isSubmitDisabled}>Finaliser la création</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewContact;
// fais