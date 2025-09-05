import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';

import reactLogo from "../../../assets/react.svg";
import viteLogo from "/vite.svg";

import { UserContext } from '../../../context/UserContext'


const Home = () => {
  // Consumir el contexto de usuario
  const { updateUsername } = useContext(UserContext);
  const [newUsername, setNewUsername] = useState('');

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsername(newUsername);
    setNewUsername('');
  };

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Verano FullStack!</h1>

      <h2>Update Username</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newUsername} onChange={handleInputChange} />
        <button type="submit">Update</button>
      </form>
      
      <Link to='/product/2?limit=2'>Producto 2</Link>
      <Link to='/product/3?limit=2'>Producto 3</Link>
      <Link to='/product/4?limit=2'>Producto 4</Link>
      <Link to='/product/5?limit=2'>Producto 5</Link>

    </div>
  );
};

export default Home;
