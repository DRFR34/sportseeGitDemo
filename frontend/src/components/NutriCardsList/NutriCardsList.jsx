import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import NutritionCard from '../NutritionCard/NutritionCard';
import ApiService from '../../utils/apiService';
import LoadingOrNoDataMsg from '../LoadingOrNoDataMsg/LoadingOrNoDataMsg';

import fatIcon from "../../assets/images/fat-icon.png";
import carbsIcon from "../../assets/images/carbs-icon.png";
import proteinIcon from "../../assets/images/protein-icon.png";
import caloriesIcon from "../../assets/images/calories-icon.png";


import "./NutriCardsList.scss"

/**
 * NutriCardsList component displays a list of nutrition cards.
 * It fetches the main user data and generates NutritionCard components based on the data.
 *
 * @param {Object} props - Component props
 * @param {number} props.currentUserId - ID of the current user
 * @returns {JSX.Element} NutriCardsList component
 */
export default function NutriCardsList({ currentUserId }) {

    const [userMainData, setUserMainData] = useState(null); //userMainData is object
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const getUserMainData = async () => {
            setIsLoading(true);
            const fetchedData = await ApiService.getUserMainData(currentUserId);
            setUserMainData(fetchedData);
            setIsLoading(false);
        }

        getUserMainData();

    }, [currentUserId]);

    if (!userMainData) {
        return (
            <aside className="nutriCardsContainer">
                <LoadingOrNoDataMsg isLoading={isLoading} expectedData={userMainData} />
            </aside>
        )
    }
    return (
        <aside className="nutriCardsContainer">

            <NutritionCard
                count={userMainData.keyData.calorieCount}
                unit="kCal"
                category="Calories"
                className="calorie"
                icon={caloriesIcon}
            />

            <NutritionCard
                count={userMainData.keyData.proteinCount}
                unit="g"
                category="Proteines"
                className="protein"
                icon={proteinIcon}
            />

            <NutritionCard
                count={userMainData.keyData.carbohydrateCount}
                unit="g"
                category="Glucides"
                className="carbohydrate"
                icon={carbsIcon}
            />

            <NutritionCard
                count={userMainData.keyData.lipidCount}
                unit="g"
                category="Lipides"
                className="lipid"
                icon={fatIcon}
            />

        </aside>
    )

}


NutriCardsList.propTypes = {
    currentUserId: PropTypes.number.isRequired,
};