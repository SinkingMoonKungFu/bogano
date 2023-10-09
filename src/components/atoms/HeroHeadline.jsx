import PropTypes from 'prop-types';

import './HeroHeadline.scss';

export const HeroHeadline = ({ ...props }) => {
    return (
        <h2 className="hero-headline">
            {props.text}
        </h2>
    );
};

HeroHeadline.propTypes = {
  /**
   * This is the text that will be displayed in the headline.
   */
  text: PropTypes.string,
};

HeroHeadline.defaultProps = {
};
