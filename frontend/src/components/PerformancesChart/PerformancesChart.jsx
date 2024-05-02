import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import LoadingOrNoDataMsg from '../LoadingOrNoDataMsg/LoadingOrNoDataMsg';
import ApiService from '../../utils/apiService.js'

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis } from 'recharts'

import './PerformancesChart.scss'

/**
 * PerformancesChart component displays a radar chart showing user performance data.
 * It fetches the user's performance data and renders the chart using Recharts library.
 *
 * @param {Object} props - Component props
 * @param {number} props.currentUserId - ID of the current user
 * @returns {React.Element} PerformancesChart component
 */

export default function PerformancesChart({ currentUserId }) {

    const [userPerformance, setUserPerformance] = useState(null); //userMainData is object
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getUserPerformance = async () => {
            setIsLoading(true);
            const fetchedData = await ApiService.getUserPerformance(currentUserId);
            setUserPerformance(fetchedData);
            setIsLoading(false);
        }

        getUserPerformance();
    }, [currentUserId]);

    if (!userPerformance) {
        return (
            <div className='radarContainer'>
                <LoadingOrNoDataMsg isLoading={isLoading} expectedData={userPerformance} />
            </div>
        )
    }

    let perfsDataWithLabels = userPerformance.data.map(performance => ({
        ...performance,
        kind: userPerformance.kind[performance.kind.toString()]
    }));

    // Object used by PolarAngleAxis.tickFormatter
    const translatedLabels = {
        cardio: 'cardio',
        energy: 'énergie',
        endurance: 'endurance',
        strength: 'force',
        speed: 'vitesse',
        intensity: 'intensité'
    };


    return (
        <div className='radarContainer'>
            <ResponsiveContainer width="95%" >

                <RadarChart
                    outerRadius="70%"
                    width={268}
                    height={245}
                    data={[...perfsDataWithLabels].reverse()} // reversing of the data order for compliance with Figma Mockup
                >

                    <PolarGrid radialLines={false} />


                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ style: { fontSize: 10, fontWeight: 100, letterSpacing: 1.1 } }}
                        tickFormatter={(labelValue) => translatedLabels[labelValue]} />

                    <PolarRadiusAxis
                        tickCount={6} // for compliance with mockup
                        tick={false}
                        axisLine={false}
                    />

                    <Radar
                        dataKey='value'
                        stroke="#ff0101"
                        fill="#ff0101"
                        fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    )
}

PerformancesChart.propTypes = {
    currentUserId: PropTypes.number.isRequired
};