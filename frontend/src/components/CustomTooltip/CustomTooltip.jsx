

import React from 'react'
import PropTypes from 'prop-types';


/**
 * CustomTooltip component displays a customized tooltip for a Recharts chart.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.active - Whether the tooltip is active or not
 * @param {Object[]} props.payload - Array of data points to display in the tooltip
 * @param {string} props.label - Label for the tooltip
 * @param {string} props.boxClass - CSS class for the tooltip box
 * @returns {React.Element | null} CustomTooltip component
 */
export default function CustomTooltip({ active, payload, customTooltipClass }) {
    if (active && payload && payload.length) {

        return (
            <div className={`${customTooltipClass}`}>
              <span className="customTooltip__item">{ `${payload[0].value} kg`}</span>
              <span className="customTooltip__item">{ `${payload[1].value} kCal`}</span>
            </div>
          );
    }
    return null;
}
 

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ),
  label: PropTypes.string,
  customTooltipClass: PropTypes.string.isRequired,
};