import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis
} from 'recharts'

import LoadingOrNoDataMsg from '../LoadingOrNoDataMsg/LoadingOrNoDataMsg';
import ApiService from '../../utils/apiService.js'
import "./ScoreChart.scss";


/**
 * @description ScoreChart component displays a radial bar chart representing the user's score.
 * It fetches the user's main data and renders the chart using Recharts library.
 *
 * @param {Object} props - Component props
 * @param {number} props.currentUserId - ID of the current user
 * @returns {JSX.Element} ScoreChart component
 */
export default function ScoreChart({ currentUserId }) {

  const [userMainData, setUserMainData] = useState(null); //userMainData is an object
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
      <article className='scoreChart'>
        <LoadingOrNoDataMsg isLoading={isLoading} expectedData={userMainData} />
      </article>
    )
  }

  // RadialBarChart accepts an array of objects for param
  const data = [{ name: 'score', value: (userMainData.score || userMainData.todayScore) }]

  return (

    <article className='scoreChart'>

      <h2 className="scoreChart__title">Score</h2>

      <ResponsiveContainer
        width="90%"
        height="90%"
        className={'scoreChart__RespCntnr'}
      >

        <RadialBarChart
          className='scoreChart__RespCntnr__radialBarChart'
          innerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >

          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            className='scoreChart__RespCntnr__radialBarCh__scoreRadialBar'
            dataKey="value"
            barSize={10}
            minAngle={5} // to ensure that even small values are visible
            background={{ fill: '#fff' }}
            cornerRadius={5}
            fill="#E60000"
          />

        </RadialBarChart>

      </ResponsiveContainer>

      <div className="scoreChart__label">
        <span className="scoreChart__label__title">
          {data[0].value && data[0].value * 100}%
        </span>
        <span>de votre</span>
        <span>objectif</span>
      </div>

    </article>
  )
}

ScoreChart.propTypes = {
  currentUserId: PropTypes.number.isRequired
};