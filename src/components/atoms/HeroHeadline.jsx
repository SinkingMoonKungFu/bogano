import PropTypes from 'prop-types';
import { IoIosPin } from 'react-icons/io';

import './HeroHeadline.scss';

export const HeroHeadline = ({ ...props }) => {
    let classNames = [props.className, 'hero-headline'];
    let icon;
    if (props.icon && props.icon === 'pin') {
        icon = <IoIosPin size='2em'/>
        classNames.push('with-icon');
    }

    let heroContainer = (
        <h2 className={classNames.join(' ')}>
            {icon} {props.text}
        </h2>
    );

    if (props.size === 'small') {
        classNames.push('small');
        heroContainer = (
            <h3 className={classNames.join(' ')}>
                {icon} {props.text}
            </h3>
        );
    }

    if (props.link) {
        return (
            <a href={props.link}>
                {heroContainer}
            </a>
        );
    }

    return heroContainer;
};

HeroHeadline.propTypes = {
  /**
   * This is the text that will be displayed in the headline.
   */
  text: PropTypes.string,
  icon: PropTypes.string,
};

HeroHeadline.defaultProps = {
};
