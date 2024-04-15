import React, { Component } from 'react';

export default class Maj_Utilisateur extends Component {
  render() {
    return (
      <div>
        <div style={styles.header}>
          <img src="Image/logo.png" alt="Logo" />
        </div>
        <div style={styles.container}>
          <h1 style={styles.title}>Mise à jour Utilisateur</h1>
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" style={styles.input} />
              <input type="file" id="file" name="file" style={styles.input} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Mettre à jour</button>
          </form>
        </div>
      </div>
    );
  }
}

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
