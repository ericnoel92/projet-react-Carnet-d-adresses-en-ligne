import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Inscription extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'black', padding: '20px', width: '100%' }}>
            <img src="Image/logo.png" alt="Logo" />
          </div>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>Inscription</h1>
          </div>
          <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '20px' }}>
            <form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Sign Up</button>
              <Link to="/Profil">
                <button>Go to Profile</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// inscription post 