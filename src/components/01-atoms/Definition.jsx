import React from 'react';
import PropTypes from 'prop-types';

import './Definition.scss';

export const Definition = ({...props}) => {
    return (
        <>
            <dt>{props.term}</dt>
            <dd>{props.definition}</dd>
        </>
    );
};

Definition.PropTypes = {
    term: PropTypes.string,
    definition: PropTypes.string,
    marker: PropTypes.bool,
};

Definition.defaultProps = {
    marker: false
};