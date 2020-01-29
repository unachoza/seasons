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

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`seasons-display ${season}`}>
      <i className={`icon-right massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-left massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
