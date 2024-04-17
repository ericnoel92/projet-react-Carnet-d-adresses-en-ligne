import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Datauser = () => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/users", requestOptions)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (userId) => {
    // Logique de suppression à ajouter
    console.log(`Supprimer l'utilisateur avec l'ID : ${userId}`);
  };

  const handleUpdate = (userId) => {
    // Logique de mise à jour à ajouter
    console.log(`Mettre à jour l'utilisateur avec l'ID : ${userId}`);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'black', padding: '20px', display: 'flex', alignItems: 'center' }}>
            <img src="Image/logo.png" alt="Logo" style={{ marginRight: '20px' }} />
            <Link to="/Nouveau_Contact" style={{ textDecoration: 'none', color: 'white', backgroundColor: 'blue', padding: '10px', borderRadius: '5px', marginRight: '10px' }}>Add new Contact</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <div>
              <img src="Avatar.png" alt="" style={{ marginRight: '20px' }} />
              <p>Full Name : {user.name}</p>
              <p>Email : {user.mail}</p>
              <p>Phone Number : {user.phoneNumber}</p>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
              <button onClick={() => handleUpdate(user.id)}>Update</button>
            </div>
            <input type="text" placeholder="Rechercher..." style={{ marginRight: '10px' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Datauser;
// fais