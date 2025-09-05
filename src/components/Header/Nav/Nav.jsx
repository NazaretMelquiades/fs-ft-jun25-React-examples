import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav className='nav-bar'>
            <ul>
                <li><Link to='/' className="link-day">Home</Link></li>
                <li><Link to='/travel'>Viajes</Link></li>
                <li><Link to='/about'>About</Link></li >
                <li><Link to='/contact'>Contacto</Link></li >
                <li><Link to='/staff'>Equipo</Link></li >
                <li><Link to='/topic'>Topic</Link></li >
                <li><Link to='/wishlist'>Deseos</Link></li >
                <li><Link to='/product/2?limit=2'>Producto 2</Link></li >
            </ul>
          </nav>;
};

export default Nav;
