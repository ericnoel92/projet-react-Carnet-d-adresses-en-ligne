import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import de Link depuis react-router-dom
const NewContact = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(0); // Initialiser l'ID à 0
    const [contacts, setContacts] = useState([]); // Tableau pour stocker les contacts

    const containerStyle = {
        textAlign: 'center', // Pour centrer le contenu horizontalement
        marginTop: '50px', // Espacement par rapport au header
    };

    const formContainerStyle = {
        width: '50%', // Largeur du formulaire
        margin: 'auto', // Pour centrer horizontalement
        display: 'flex', // Utilisation de Flexbox
        flexDirection: 'column', // Alignement vertical des éléments
        alignItems: 'center', // Alignement horizontal des éléments
    };

    const inputStyle = {
        marginBottom: '10px', // Espacement entre les champs
    };

    const handleFinaliserClick = () => {
        // Incrémentation de l'ID et création d'un nouvel objet contact avec l'ID généré
        const newId = id + 1;
        const newContact = { id: newId, nom: nom, email: email };
        
        // Ajout du nouveau contact au tableau des contacts
        setContacts([...contacts, newContact]);
        
        // Mise à jour de l'ID
        setId(newId);
        
        // Réinitialisation des champs du formulaire
        setNom('');
        setEmail('');

        // Affichage de l'alerte pour indiquer qu'un nouveau contact a été créé
        alert('Nouveau contact créé !');
    };

    return (
        <div>
            <div style={{ backgroundColor: 'black', padding: '20px', textAlign: 'left' }}>
                <img src="Image/logo.png" alt="Logo" />
            </div>
            <div style={containerStyle}>
                <h1>Nouveau Contact</h1>
                <div style={formContainerStyle}>
                    <form>
                        <label style={inputStyle}>
                            Nom:
                            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                        </label>
                        <label style={inputStyle}>
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <Link to="/Home">
                        <button type="button" onClick={handleFinaliserClick} style={{ marginTop: '10px' }}>Finaliser la création</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewContact;
