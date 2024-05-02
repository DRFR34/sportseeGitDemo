import React from 'react'
import PropTypes from 'prop-types';

import './NutritionCard.scss'


/**
 * NutritionCard component displays a card with nutritional informations
 * @param {Object} props - Component props
 * @param {string} props.icon - URL of the icon to display
 * @param {number} props.count - Count value to display
 * @param {string} props.unit - Unit of the count value
 * @param {string} props.category - Category of the nutrition card
 * @returns {React.Element} NutritionCard component
 */
export default function NutritionCard({ icon, count, unit, category }) {


  return (
    <article className='nutriCard'>
      <div className="nutriCard__IconBox">
        <img src={icon} alt="icône" />
      </div>
      <div className="nutriCard__textsBox">
        <span className='nutriCard__textsBox__count'> {count} <span></span> <span> {unit} </span></span>
        <span className="nutriCard__textsBox__category"> {category} </span>
      </div>
    </article>
  )
}

NutritionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};