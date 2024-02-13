import React from 'react';
import PropTypes from 'prop-types';
import '../Statistics/Statistics.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className='statistics__container'>    
    <h3 className='statistics__head'>Statistics</h3>
    <ul className='statistics__list'>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>

);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};