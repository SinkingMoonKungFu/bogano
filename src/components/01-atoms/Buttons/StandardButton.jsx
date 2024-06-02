import React from 'react';
import PropTypes from 'prop-types';

import './StandardButton.scss';

export const StandardButton = ({...props}) => {
    return (
        <button className="standard-button" onClick={props.onClick}>{props.label}</button>
    );
};

StandardButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
};

StandardButton.defaultProps = {
};