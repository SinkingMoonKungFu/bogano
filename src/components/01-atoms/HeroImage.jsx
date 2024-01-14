import PropTypes from 'prop-types';

import { normalizeToBasePath } from '../../util/Url';

import './HeroImage.scss';

export const HeroImage = ({ ...props }) => {
    const image = normalizeToBasePath(props.image);

    return (
        <img className="hero-image" src={image} alt={props.alt} />
    );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

HeroImage.defaultProps = {
};
