import PropTypes from 'prop-types';
import { IoIosPin } from 'react-icons/io/index.js';

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

    if (props.size === 'smallBox') {
        classNames.push('smallBox');
        heroContainer = (
            <h5 className={classNames.join(' ')}>
                {icon} {props.text}
            </h5>
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
