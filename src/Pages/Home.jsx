import React, { Component } from 'react';

export default class Home extends Component {
  handleAddContact = () => {
    // Ici, vous pouvez mettre la logique pour ajouter un nouveau contact
    alert('Nouveau contact ajouté !');
  };

  handleSearch = () => {
    // Ici, vous pouvez mettre la logique pour effectuer une recherche
    alert('Recherche en cours...');
  };

  render() {
    const containerStyle = {
      padding: '20px',
    };

    const headerStyle = {
      backgroundColor: 'black',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };

    const buttonStyle = {
      backgroundColor: 'purple',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    const searchBarStyle = {
      backgroundColor: 'lightgray',
      padding: '10px',
      borderRadius: '5px',
      marginLeft: 'auto', // Pour aligner à droite
    };

    const avatarContainerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    };

    const avatarStyle = {
      width: '100px',
      height: '100px',
      margin: '0 5px',
    };

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <img src="Image/logo.png" alt="Logo" />
          <div style={searchBarStyle}>
            <input type="text" placeholder="Rechercher..." />
          </div>
        </div>
        <button style={buttonStyle} onClick={this.handleAddContact}>Ajouter un nouveau contact</button>
        <div style={avatarContainerStyle}>
          <img src="Avatar.png" alt="" style={avatarStyle} />
          <img src="Avatar.png" alt="" style={avatarStyle} />
          <img src="Avatar.png" alt="" style={avatarStyle} />
        </div>
      </div>
    );
  }
}
