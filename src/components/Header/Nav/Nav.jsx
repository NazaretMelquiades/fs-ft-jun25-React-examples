import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/travel'>Viajes</Link></li>
                <li><Link to='/about'>About</Link></li >
                <li><Link to='/contact'>Contacto</Link></li >
                <li><Link to='/staff'>Equipo</Link></li >
                <li><Link to='/topic'>Topic</Link></li >
            </ul>
          </nav>;
};

export default Nav;
