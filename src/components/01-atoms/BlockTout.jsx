import React from 'react';
import PropTypes from 'prop-types';

import './BlockTout.scss';

export const BlockTout = ({...props}) => {
    return (
        <a className="block-tout" href={props.link}>
            <img className="block-tout-img" src={props.image} alt={props.text}></img>
            <h4 className="block-tout-headline">{props.text}</h4>
        </a>
    );
};

BlockTout.PropTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
};

BlockTout.defaultProps = {
};