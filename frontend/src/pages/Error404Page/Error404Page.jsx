import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Error404Page.scss'

export const p404Options = {
  opt1: {
    errorText: "😕 Aucun utilisateur n'a été séléctionné.",
    homeLinkText: "Retouner à la page d’accueil pour sélectionner un utilisateur."
  },
  opt2: {
    errorText: "😕 Désolé, l'utilisateur demandé n'existe pas.",
    homeLinkText: "Retouner à la page d’accueil pour sélectionner un utilisateur."
  }
}

/**
 * Component for the error 404 page, is customizable following context, for a better user information.
 * @param {Object} props - The props for the error 404 page.
 * @param {string} props.errorText - The text for the error witth a default text
 * @param {string} props.homeLinkText - The text for the home link with a default 
 * @returns {JSX.Element} The error 404 page component.
 */
export default function Error404Page({ errorText = '😕 La page demandée est introuvable.', homeLinkText = "Retouner à la page d'accueil." }) {

  return (

    <main>
      <h1 className="errorCode">404</h1>
      <h2 className="errorMsg">
        <span>{errorText}</span>
      </h2>
      <br />
      <Link className="linkToHome" to="/"> {homeLinkText}</Link>
    </main>
  )
}

Error404Page.propTypes = {
  errorText: PropTypes.string,
  homeLinkText: PropTypes.string
}
