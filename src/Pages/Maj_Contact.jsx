import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Maj_Contact = () => {
  const [formData, setFormData] = useState({
    file: '',
    password: '',
    email: ''
  });
  const [formValid, setFormValid] = useState(false); // État pour vérifier la validité du formulaire
 
  useEffect(() => {
    // Effectue une requête GET à l'API pour récupérer les données initiales
    fetch('http://localhost:3030/users')
      .then(response => response.json())
      .then(data => {
        setFormData(data);
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
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier si tous les champs sont remplis
    if (formData.email && formData.password && formData.file) {
      // Envoyer les données du formulaire à l'API
      fetch('http://localhost:3030/users', {
        method: 'Put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        // Réinitialiser le formulaire après soumission
        setFormData({
          file: '',
          password: '',
          email: ''
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  // Vérifier si tous les champs sont remplis
  useEffect(() => {
    if (formData.email && formData.password && formData.file) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formData.email, formData.password, formData.file]);
 
  return (
    <div>
      <div style={styles.header}>
        <img src="Image/logo.png" alt="Logo" />
      </div>
      <div style={styles.container}>
        <h1 style={styles.title}>Mise à jour Contact</h1>
        <form onSubmit={handleSubmit}>
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
            <input
              type="file"
              id="file"
              name="file"
              value={formData.file}
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
          <Link to="/Home">
            <button type="submit" style={styles.button} disabled={!formValid}>Mettre à jour</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

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
  },
};

export default Maj_Contact;
