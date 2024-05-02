import React from 'react';

import "./SideBar.scss";

import yogaIcon from "../../assets/images/yoga-icon.png";
import swimingIcon from "../../assets/images/swiming-icon.png";
import bikingIcon from "../../assets/images/biking-icon.png";
import weightlifitingIcon from "../../assets/images/weightlifting-icon.png";
import "../../assets/images/protein-icon.png";

/**
 * SideBar component displays a sidebar navigation with icons.
 *
 * @returns {React.Element} SideBar component
 */
export default function SideBar() {
  return (
    <div className='sideBar'>
      <nav className="sideBar__nav">
        <div className="sidebar__nav__btn">
          <img src={yogaIcon} alt="yoga icon" className="sidebar__nav__btn__icon" />
        </div>
        <div className="sidebar__nav__btn">
          <img src={swimingIcon} alt="swiming icon" className="sidebar__nav__btn__icon" />
        </div>
        <div className="sidebar__nav__btn">
          <img src={bikingIcon} alt="yoga icon" className="sidebar__nav__btn__icon" />
        </div>
        <div className="sidebar__nav__btn">
          <img src={weightlifitingIcon} alt="yoga icon" className="sidebar__nav__btn__icon" />
        </div>
      </nav>
      <div className="sideBar__footer">
        <div className="sideBar__footer__copyright"> 
          Copyright, SportSee 2024
        </div>
      </div>
    </div>
  )
}

SideBar.propTypes = {
  // No props for this component
};