import React from 'react';
import PropTypes from 'prop-types';

import './NumberedListItem.scss';

export const NumberedListItem = ({...props}) => {
    let listItemStyle = {};
    if (props.color) {
        listItemStyle.color = props.color;
    }

    return (
        <li className="numeric-listing">
            <span className="numeral" style={listItemStyle}>{props.numeral}</span>
            <div className="numeric-text-container">
                <div className="numeric-title">{props.title}</div>
                <p>{props.description}</p>
            </div>
        </li>
    );
};

NumberedListItem.propTypes = {
    numeral: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string
};

NumberedListItem.defaultProps = {
};