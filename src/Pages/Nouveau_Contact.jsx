import React from 'react';
import Nouveau_Contact from './Nouveau_Contact';
console.log("Hello World");
const NewContact = () => {
    return (
        <div>
            <div style={{ backgroundColor: 'black', padding: '20px' }}>
                <img src="Image/logo.png" alt="Logo" />
            </div>
            <h1>Nouveau Contact</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Nom:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" /></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Finaliser la création</button>
        </div>
    );
};

export default NewContact;
