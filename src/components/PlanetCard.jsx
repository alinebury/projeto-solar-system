import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <li data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img className="img-planet" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </li>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
