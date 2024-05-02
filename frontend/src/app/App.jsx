import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar';
import SideBar from '../components/SideBar/SideBar';
import SiteRoutes from '../components/SiteRoutes/SiteRoutes.jsx';


import "./App.scss"

/**
 * The main app component.
 * @export {JSX.Element.Component}
 * @returns {*}
 */
export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter
        basename="/sportseeGitDemo"
      >
        <TopBar />
        <div
          className='SideBarAndMainContainer'
        >
          <SideBar />

          <SiteRoutes />

        </div>

      </BrowserRouter>

    </React.StrictMode>
  )
}
