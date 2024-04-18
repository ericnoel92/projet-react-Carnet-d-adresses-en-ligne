import React, { Component } from "react";
import { Link } from "react-router-dom"; // Import de Link depuis react-router-dom
import Bouton_Delete from "../Components/Bouton_Delete";
import Bouton_Update from "../Components/Bouton_Update";

export default class Home extends Component {
  handleAddContact = () => {
    // Ici, vous pouvez mettre la logique pour ajouter un nouveau contact
    alert("Nouveau contact ajouté !");
  };

  handleSearch = () => {
    // Ici, vous pouvez mettre la logique pour effectuer une recherche
    alert("Recherche en cours...");
  };

  handleDelete = () => {
    // Ici, vous pouvez mettre la logique pour supprimer un contact
    alert("Contact supprimé !");
  };

  handleUpdate = () => {
    // Redirection vers la page "/Nouveau_Contact" lors du clic sur le bouton Update
    // Utilisation de Link pour la navigation
    // Vous pouvez remplacer l'alerte par le code de redirection si nécessaire
    alert("Redirection vers la page Nouveau_Contact");
    // Exemple de redirection avec React Router
    // this.props.history.push('/Nouveau_Contact');
  };

  render() {
    const containerStyle = {
      padding: "20px",
    };

    const headerStyle = {
      backgroundColor: "black",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    };

    const buttonStyle = {
      backgroundColor: "purple",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    };

    const searchBarStyle = {
      backgroundColor: "lightgray",
      padding: "10px",
      borderRadius: "5px",
      marginLeft: "auto", // Pour aligner à droite
    };

    const avatarContainerStyle = {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    };

    const avatarStyle = {
      width: "100px",
      height: "100px",
      margin: "0 5px",
    };

    const userInfoStyle = {
      textAlign: "center",
    };

    const actionButtonStyle = {
      backgroundColor: "red",
      color: "white",
      padding: "5px 10px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      marginRight: "5px",
    };

    const updateButtonStyle = {
      backgroundColor: "blue",
      color: "white",
      padding: "5px 10px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
    };

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <img src="Image/logo.png" alt="Logo" />
          <div style={searchBarStyle}>
            <input type="text" placeholder="Rechercher..." />
          </div>
          {/* Ajout du bouton "Connexion" avec un lien */}
          <Link to="/connexion">
            <button style={buttonStyle}>Connexion</button>
          </Link>
        </div>
        <Link to="/Nouveau_Contact">
          <button style={buttonStyle}>Ajouter un nouveau contact</button>
        </Link>
        <div style={avatarContainerStyle}>
          <div>
            <img src="Avatar.png" alt="" style={avatarStyle} />
            <div style={userInfoStyle}>
              <p>Full Name</p>
              <p>Email</p>
              <p>Address</p>
              <Bouton_Delete />
              {/* Utilisation du composant Bouton_Update avec Link */}
              <Link to="/Maj_Cantact">
                <button style={updateButtonStyle}>Update</button>
                {/* <Bouton_Update updateButtonStyle={updateButtonStyle} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// fais