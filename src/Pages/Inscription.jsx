import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Inscription = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        // Envoi du formulaire à l'API
        fetch('http://localhost:3030/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Réinitialisation du formulaire après soumission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            });
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
                <h1>Inscription</h1>
            </div>
            <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Link to="/Profil">
                <button>Go to Profile</button>
            </Link>
        </div>
    );
};

export default Inscription;
// Fais