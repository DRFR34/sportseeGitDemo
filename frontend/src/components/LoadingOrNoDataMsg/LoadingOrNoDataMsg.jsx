import React from 'react'
import PropTypes from 'prop-types';
import Error404Page, { p404Options } from '../../pages/Error404Page/Error404Page';


import "./LoadingOrNoDataMsg.scss"
/**
 * Renders a loading or no data message based on the provided props.
 *
 * @param {Object} props - The props object 
 * @param {boolean} porps.isLoading indicating whether the data is currently being loaded.
 * @param {Object} props.expectedData:  the expected data.
 * @return {JSX.Element} The rendered loading or no data message.
 */

export default function LoadingOrNoDataMsg({ isLoading, expectedData }) {

  if (isLoading) {
    return (
      <div className='LoadingOrNoDataMsg'>
        {isLoading && <div className="loading-message">⏳ Chargement en cours...</div>}
      </div>
    )
  }

  if (!isLoading &&!expectedData ) {    
    return (
      <Error404Page
        errorText={p404Options.opt2.errorText}
        homeLinkText={p404Options.opt2.homeLinkText}
      />
    )
  }
}

LoadingOrNoDataMsg.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  expectedData: PropTypes.object
};