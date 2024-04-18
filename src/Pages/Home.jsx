import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import de Link depuis react-router-dom
import Bouton_Update from "../Components/Bouton_Update"; // Import du composant Bouton_Update

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [] // Initialisez un tableau pour stocker les utilisateurs
    };
  }

  componentDidMount() {
    // Faites une requête à votre API pour récupérer la liste des utilisateurs
    fetch('http://localhost:3030/users')
      .then(response => response.json()) // Convertit la réponse en JSON
      .then(data => {
        // Mettez à jour le state avec les utilisateurs récupérés
        this.setState({ users: data });
      })
      .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
  }

  // Fonction pour supprimer un utilisateur
  handleDelete = (userid) => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if (confirmation) {

      fetch(`http://localhost:3030/users/${userid}`, {
        method: 'DELETE', // Effectue une requête DELETE à l'API avec l'ID de l'utilisateur
      })
      .then(response => {
        console.log(response)
        if (response.ok) {
          // Met à jour la liste des utilisateurs après suppression
          this.setState(prevState => ({
            users: prevState.users.filter(user => user.id !== userid)
          }));
          alert('Utilisateur supprimé avec succès.');
        } else {
          throw new Error('Erreur lors de la suppression de l\'utilisateur.');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        alert('Erreur lors de la suppression de l\'utilisateur.');
      });
    }
  };
  
  render() {
    const { users } = this.state;

    const buttonStyle = {
      backgroundColor: 'purple',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    return (
      <div>
        {/* En-tête avec logo et boutons de connexion et d'inscription */}
        <div style={{ backgroundColor: 'black', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="Image/logo.png" alt="Logo" />
          <div>
            {/* Ajout du bouton "Connexion" avec un lien */}
            <Link to="/connexion">
              <button style={buttonStyle}>Connexion</button>
            </Link>
            {/* Ajout du bouton "Inscription" avec un lien */}
            <Link to="/inscription">
              <button style={buttonStyle}>Inscription nouveau contact</button>
            </Link>
          </div>
        </div>
        {/* Affichage de la liste des utilisateurs avec des boutons de suppression et de mise à jour */}
        {users.map(user => (
          <div key={user.id}>
            <img src="Avatar.png" alt="" style={{ width: '100px', height: '100px', margin: '0 5px' }} />
            <div style={{ textAlign: 'center' }}>
              <p>Full Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
              {/* Bouton de suppression d'utilisateur */}
              <button onClick={() => this.handleDelete(user.id)}>Delete</button>
              {/* Utilisation du composant Bouton_Update avec lien vers la page de mise à jour */}
              <Link to={`/Maj_Cantact`}>
                <button style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '3px', cursor: 'pointer', marginLeft: '5px' }}>Update</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
