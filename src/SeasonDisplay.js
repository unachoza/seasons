import React from 'react';
import './SeasonsDisplay.css'

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake',
  },
};
const getSeason = (lat, month) => {
  return month > 2 && month < 9 ? (lat > 0 ? 'summer' : 'winter') : (lat < 0 ? 'summer' : 'winter')
};

const SeasonDisplay = ({lat}) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`seasons-display ${season}`}>
      <i className={`icon-right massive ${iconName} icon shake`} />
      <h1>{text}</h1>
      <i className={`icon-left massive ${iconName} icon shake`} />
    </div>
  );
};

export default SeasonDisplay;
