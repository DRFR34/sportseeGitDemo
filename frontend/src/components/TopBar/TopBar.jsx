import React from 'react'
import { NavLink } from 'react-router-dom';

import './TopBar.scss';
import logo from "../../assets/images/logo.png";

/**
 *@description TopBar component displays a top navigation bar with links and a logo.
 *
 * @returns {React.Element} TopBar component
 */
export default function TopBar() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <NavLink to="/">
          <img src={logo} alt="logo d'entête" className='header__nav__logo'/>
        </NavLink>
 
      
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header__nav__link isActive' : 'header__nav__link'
          }
          to="/">
          Accueil
        </NavLink>
        <NavLink
          className={(({ isActive }) =>
            isActive ? 'header__nav__link isActive' : 'header__nav__link'
          )}
          to="/profil">
          Profil
        </NavLink>
        <NavLink
          className={(({ isActive }) =>
            isActive ? 'header__nav__link isActive' : 'header__nav__link'
          )}
          to="/reglage">
          Réglage
        </NavLink>
        <NavLink
          className={(({ isActive }) =>
            isActive ? 'header__nav__link isActive' : 'header__nav__link'
          )}
          to="/communaute">
          Communauté
        </NavLink>
      </nav>
    </header>
  )
}

TopBar.propTypes = {
  // No props for this component
};