import React from 'react';
import PropTypes from 'prop-types';
import './BlockBeltRankImage.scss';

export const BlockBeltRankImage = (props) => {
    return (
        <div className="block-beltrank-visual">
            <img src={props.image} alt={props.description} className="block-beltrank-image-element"></img>
            <div className={`belt ${props.color}-belt belt-length-parent belt-overlay`}></div>
        </div>
    );
};

BlockBeltRankImage.propTypes = {
    image: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string
};
