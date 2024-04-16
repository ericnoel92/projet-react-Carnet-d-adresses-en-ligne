import React, { Component } from 'react';

export default class Bouton_Delete extends Component {
  handleDeleteClick = () => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer vos données ?");
    if (confirmation) {
      this.props.onDelete(); // Appel de la fonction onDelete passée en tant que prop
    }
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'red', // Couleur de fond rouge
      color: 'white', // Couleur du texte blanc
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    return (
      <button style={{ ...buttonStyle, ...this.props.deleteButtonStyle }} onClick={this.handleDeleteClick}>Delete</button>
    );
  }
}
// methode delete

