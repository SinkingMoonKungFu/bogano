import PropTypes from 'prop-types';

import { HeroHeadline } from '../01-atoms/HeroHeadline';
import { HeroImage } from '../01-atoms/HeroImage';

import './HeroBlock.scss';

export const HeroBlock = ({ ...props }) => {
    return (
        <span className="hero-block">
            <HeroImage image={props.image} alt={props.imageAlt} />
            <HeroHeadline className="block-hero-tagline" text={props.tagline} />
            <HeroHeadline className="block-hero-address" text={props.address} link={props.addressLink} icon="pin" size="smallBox" />
        </span>
    );
};

HeroBlock.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  tagline: PropTypes.string,
  address: PropTypes.string,
  addressLink: PropTypes.string
};

HeroBlock.defaultProps = {
};
