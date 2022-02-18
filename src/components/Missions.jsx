import React from 'react';
import Title from './Title';
import MissonCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {missions.map((mission) => (<MissonCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
          ))}
        </ul>
      </div>
    );
  }
}

export default Missions;
