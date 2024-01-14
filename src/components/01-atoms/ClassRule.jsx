import React from 'react';
import PropTypes from 'prop-types';

import './ClassRule.scss';

export const ClassRule = ({...props}) => {
    return (
        <li className="rule-listing">
            <span className="numeral">{props.numeral}</span>
            <div className="rule-text-container">
                <div className="rule-title">{props.title}</div>
                <p>{props.description}</p>
            </div>
        </li>
    );
};

ClassRule.propTypes = {
    numeral: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
};

ClassRule.defaultProps = {
};