import PropTypes from 'prop-types';

import './HeroImage.scss';

export const HeroImage = ({ ...props }) => {
    return (
        <img className="hero-image" src={props.image} alt={props.alt} />
    );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

HeroImage.defaultProps = {
};
