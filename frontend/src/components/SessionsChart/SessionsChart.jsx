import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle
} from 'recharts';

import LoadingOrNoDataMsg from '../LoadingOrNoDataMsg/LoadingOrNoDataMsg';
import ApiService from '../../utils/apiService.js'

import './SessionsChart.scss';

/**
 * @description - SessionsChart component displays a line chart representing the average session length.
 * It fetches the user's average sessions data and renders the chart using Recharts library.
 *
 * @param {Object} props - Component props
 * @param {number} props.currentUserId - ID of the current user
 * @returns {React.Element} SessionsChart component
 */
export default function SessionsChart({ currentUserId }) {

  const [userAverageSessions, setUserAverageSessions] = useState(null); //userMainData is object
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserAverageSessions = async () => {
      setIsLoading(true);
      const fetchedData = await ApiService.getUserAverageSessions(currentUserId);
      setUserAverageSessions(fetchedData);
      setIsLoading(false);
    }

    getUserAverageSessions();

  }, [currentUserId]);

  if (!userAverageSessions) {
    return (
      <div className="sessionsChartContainer">
        <LoadingOrNoDataMsg isLoading={isLoading} expectedData={userAverageSessions} />
      </div>
    )
  }

  //== Customization of the Chart 
  //* Add the name of the days of the week
  const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const userSessionsWithDay = userAverageSessions.sessions.map(session => {
    return { ...session, day: dayNames[session.day - 1] };
  });

  /**
   * CustomTooltip component displays a customized tooltip for a Recharts chart.
   *Ref.: https://recharts.org/en-US/examples/CustomContentOfTooltip
   * @param {Object} props - Component props
   * @param {boolean} props.active - Whether the tooltip is active or not
   * @param {Object[]} props.payload - Array of data points to display in the tooltip
   * @param {string} props.boxClass - CSS class for the tooltip box
   * @returns {React.Element | null} CustomTooltip component
   */
  const CustomTooltip = ({ active, payload, boxClass }) => {

    if (active && payload && payload.length) {
      return (
        <div className={`${boxClass}`}>
          <span className="customTooltip__item">
            {`${payload[0].payload.sessionLength} min`}
          </span>
        </div>
      );
    }
    return null;
  };
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    boxClass: PropTypes.string,
  }

  /**
   * Renders a custom cursor component.
   * Ref. : https://github.com/recharts/recharts/issues/1816
   *
   * @param {Object} props - The properties passed to the component.
   * @param {Array} props.points - An array of points representing the cursor position.
   * @param {number} props.width - The width of the cursor rectangle.
   * @param {number} props.height - The height of the cursor rectangle.
   * @return {JSX.Element} The rendered custom cursor component.
   */
  const CustomCursor = (props) => {
    const { points, width, height } = props
    const { x } = points[0]
    return (
      <Rectangle
        fill="rgba(0,0,0,0.1)"
        stroke="none"
        x={x} //the horizontal position of the top left corner - here we use the x coordinate of the first point i.e. the pointer position
        y={0} //the vertical position of the top left corner - here 0 = top of the chart
        width={width}
        height={height}
      />
    )
  }
  CustomCursor.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number
  }

  return (

    <div className="sessionsChartContainer">

      <h2 className='sessionsChartContainer__title'>
        Durée moyenne des sessions
      </h2>

      <ResponsiveContainer
        className={"sessionsChartContainer__responsive"} width="100%"
        height="99%"
      >

        <LineChart
          data={userSessionsWithDay}
          margin={{ top: 90, right: 0, left: 0, bottom: 10 }}
        >

          <XAxis
            dataKey="day"
            padding={{ left: 20, right: 20 }}
            axisLine={false}
            tickLine={false}
            stroke="white"
            style={{
              opacity: '0.7',
              fontWeight: 'bold',
              fontSize: '0.8rem'
            }}
          />

          <YAxis hide domain={['dataMin-10', 'dataMax+10']} />

          <Tooltip
            content={<CustomTooltip boxClass={'sessionsChartTooltip'} />}
            cursor={<CustomCursor width={500} height={500} />}
          />

          <Line
            dataKey="sessionLength"
            type="natural"
            style={{ stroke: "white", padding: '60px' }}
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "white", strokeWidth: '2', r: 3, fill: "white" }}
          />

        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

SessionsChart.propTypes = {
  currentUserId: PropTypes.number.isRequired,
};

