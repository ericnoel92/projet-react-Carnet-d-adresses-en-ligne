import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    password: '',
    phonenumber: '',
    email: ''
  });
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);

  useEffect(() => {
    // Effectue une requête GET à l'API pour récupérer les données initiales
    fetch('http://localhost:3030/users')
      .then(response => response.json())
      .then(data => {
        // Assurez-vous que les valeurs reçues ne sont pas undefined
        const initialFormData = {
          password: data.password || '',
          phonenumber: data.phonenumber || '',
          email: data.email || ''
        };
        setFormData(initialFormData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Réinitialiser le message d'erreur des champs vides
    setEmptyFieldsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si tous les champs sont remplis
    const isFormValid = Object.values(formData).every(value => {
      if (typeof value === 'string') {
        return value.trim() !== '';
      }
      return true;
    });
    if (!isFormValid) {
      // Afficher le message d'erreur si des champs sont vides
      setEmptyFieldsError(true);
      return; // Empêcher la soumission du formulaire
    }
    // Envoyer les données du formulaire à l'API
    fetch('http://localhost:3030/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Réinitialiser le formulaire après soumission
      setFormData({
        password: '',
        phonenumber: '',
        email: ''
      });
      // Rediriger vers la page d'accueil après la mise à jour
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  const isFormValid = Object.values(formData).every(value => {
    if (typeof value === 'string') {
      return value.trim() !== '';
    }
    return true;
  });

  return (
    <div>
      <div style={styles.header}>
        <img src="Image/logo.png" alt="Logo" />
      </div>
      <div style={styles.container}>
        <h1 style={styles.title}>Mise à jour Utilisateur</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="phone number">phone number:</label>
            <input
              type="number"
              id="number"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          {emptyFieldsError && <span style={{ color: 'red' }}>Veuillez remplir tous les champs.</span>}
          <Link to="/Home" style={{ textDecoration: 'none' }}>
            <button type="submit" style={styles.button} disabled={!isFormValid}>Mettre à jour</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

const styles = {
  header: {
    backgroundColor: 'black',
    padding: '20px',
    width: '100%',
  },
  container: {
    textAlign: 'center',
    width: '100%',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
// fais