import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './UnderConstruction.scss'


/**
 * @description UnderConstruction component displays a message indicating that the page is under construction.
 *
 * @param {Object} props - The props of the UnderConstruction component.
 * @param {string} props.margin - The margin style for the container.
 * @returns {React.Element} UnderConstruction component
 */
export default function UnderConstruction({ margin, additionalText }) {
  return (
    <div className='underConstContainer' style={{ margin: margin }} >
      <h1 className='underConstContainer__title' > 🚧 Page en construction 🚧</h1>
      <div className='underConstContainer__additionalText'>{additionalText}</div>
      <Link className="underConstContainer__linkToHome" to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

UnderConstruction.propTypes = {
  margin: PropTypes.string.isRequired
};

export const UnderCTextsOptions = {
  opt1: (
    <div style={{ textAlign: "center" }}>
      <br />
      <h2>
        <span>⚠️</span>
        <span>Seuls les utilisateurs connectés pourront voir cette page.</span>
        <br />
        <br />
        <span> 😉 En attendant, veuillez sélectionner un utilisateur fictif sur la page d'accueil. </span>
      </h2>

    </div>

  )
}