

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './HomePage.scss'

import karlImg from '../../assets/images/Karl.png';
import ceciliaImg from '../../assets/images/Cecilia.png';
import SwitchBtn from '../../components/SwitchBtn/SwitchBtn';
import { serverPort } from '../../utils/apiService';

import apiService from '../../utils/apiService';

/**
 * HomePage component renders the home page content.
 * Currently under construction, the page displays a list of 2 test users with links to their profiles.
 *This page also provides a switch button to choose between the 2 servers status, Ok or OOS.
 * @returns {JSX.Element} HomePage component
 */
export default function HomePage() {

    // reinit the status of the no server modal, in the web Service, in case it was previously shown.
    apiService.srvrOffModalShown = false;

    const [switchBtnState, setSwitchBtnState] = useState(true);
    const switchBtnChange = () => {
        setSwitchBtnState(!switchBtnState);
    }

    switchBtnState
        ? setServerPort(3000)
        : setServerPort(3005);


    /**
     * Set the server port value.
     *
     * @param {number} newValue - The new value to set for the server port.
     * @return {void} 
     */
    function setServerPort(newValue) {
        serverPort.value = newValue;
    }
    setServerPort.propTypes = {
        newValue: PropTypes.number.isRequired
    };


    return (
        <main >
            <div className='homeHeader'>
                <h1 className="homeHeader__title">Paramétrez l'utilisation du site </h1>
                <br />

            </div>
            <div className="switchBtnCtnr">
                <h2 className="homeSubtitle">
                    Choisissez l'état du serveur
                </h2>

                <SwitchBtn
                    textOn="Ok"
                    textOff="HS"
                    switchBtnValue={switchBtnState}
                    switchBtnChange={switchBtnChange}
                />

            </div>
            <div className="usersCtnr">
                <h2 className="homeSubtitle">
                    Choisissez un utilisateur
                </h2>
                <ul className='usersCtnr__usersUl'>
                    <li>
                        <Link key="18" to="/profil/18"
                            className='userLink' > <img src={ceciliaImg} alt="Cecilia" />
                            Cecilia
                        </Link>
                    </li>
                    <li>
                        <Link key="12" to="/profil/12"
                            className='userLink' > <img src={karlImg} alt="Karl" />
                            Karl
                        </Link>
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <div className='gitPageInfoBox'>
                <h2 className='homeSubtitle' >Information importante</h2>
                <p>Le code pour cette démonstration a été modifié .<br />
                    Ceci  afin de simuler une réponse de serveur distant, <br />
                    et permettre son fonctionnement sur Github-pages.<br />
                    Le code original est visible à l'adresse :
                </p>
                <br />

                
                <a href="https://github.com/DRFR34/SportSee">https://github.com/DRFR34/SportSee</a>

               
            </div>


        </main>
    )
}

