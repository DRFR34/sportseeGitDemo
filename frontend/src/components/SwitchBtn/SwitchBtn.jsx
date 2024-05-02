import React from 'react'
import PropTypes from 'prop-types';
import './SwitchBtn.scss';

/**
 * Renders a switch button component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.textOn - The text to display when the switch is on.
 * @param {string} props.textOff - The text to display when the switch is off.
 * @param {boolean} props.switchBtnValue - The current value of the switch.
 * @param {function} props.switchBtnChange - The function to call when the switch is clicked.
 * @return {JSX.Element} The rendered switch button component.
 */
export default function SwitchBtn({  textOn, textOff, switchBtnValue, switchBtnChange }) {

    return (
        <div 
        className='switchBtnBox' 
        onClick={switchBtnChange}>
            <div className={`
        switchBtnBox__switchBtn
        ${switchBtnValue
                    ? "switchBtnBox__switchBtn--serverOn" 
                    : "switchBtnBox__switchBtn--serverOff"
                }`}
            >
                {switchBtnValue ? textOn : textOff}
            </div>
            

        </div>
    )
}

SwitchBtn.propTypes = {
    textOn: PropTypes.string.isRequired, // text to display when the switch is on
    textOff: PropTypes.string.isRequired, // text to display when the switch is off
    switchBtnValue: PropTypes.bool.isRequired, // current value of the switch 
    switchBtnChange: PropTypes.func.isRequired // the function to call when the switch is clicked. 
};