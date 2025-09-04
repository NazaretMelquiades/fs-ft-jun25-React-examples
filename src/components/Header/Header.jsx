import React, { useContext } from "react";
import Nav from "./Nav";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  // Consumir el contexto de usuario
  const { username, updateUsername } = useContext(UserContext);

  const navigate = useNavigate();

  const handleOnClick = () => navigate("/");

  return (
    <header>
      Header
      <Nav />
      {username ? 
        <>
          <span>Hola, {username}</span>
          <button onClick={() => updateUsername("")}>Logout</button>
        </>
      : <button onClick={handleOnClick}>Login</button>}
    </header>
  );
};

export default Header;
