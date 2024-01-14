import React from 'react';
import PropTypes from 'prop-types';

import { normalizeToBasePath } from '../../util/Url';

import './BlockTout.scss';

export const BlockTout = ({...props}) => {
    const imageLink = normalizeToBasePath(props.image);
    const link = normalizeToBasePath(props.link);
    return (
        <a className="block-tout" href={link}>
            <img className="block-tout-img" src={imageLink} alt={props.text}></img>
            <h4 className="block-tout-headline">{props.text}</h4>
        </a>
    );
};

BlockTout.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
};

BlockTout.defaultProps = {
};
