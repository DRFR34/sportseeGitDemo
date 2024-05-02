import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage.jsx';
import ProfilePage from '../../pages/ProfilePage/ProfilePage.jsx';
import SettingsPage from '../../pages/SettingsPage/SettingsPage.jsx';
import CommunityPage from '../../pages/CommunityPage/CommunityPage.jsx';
import Error404Page from '../../pages/Error404Page/Error404Page.jsx';
import UnderConstruction, { UnderCTextsOptions } from '../UnderConstruction/UnderConstruction.jsx';

/**
 * Component for rendering the site routes.
 * @returns {JSX.Element.Component} The site routes component.
 */
export default function SiteRoutes() {

    return (
        <>
            <Routes>

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/profil/:idSlug"
                    element={<ProfilePage />}
                />

                <Route
                    path="/reglage"
                    element={<SettingsPage />}
                />

                <Route
                    path="/communaute"
                    element={<CommunityPage />}
                />

                {/* ***Error 404 customized pages*** */}
                <Route
                    path="*"
                    element={<Error404Page />}
                />

                <Route
                    path="/profil/"
                    element={

                        <UnderConstruction margin="200px 0 0 0"
                            additionalText={UnderCTextsOptions.opt1}
                        />
                    } />

            </Routes>
        </>
    )
}
