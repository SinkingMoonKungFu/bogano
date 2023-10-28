import React from 'react';

import './HorizontalRule.scss';

export const HorizontalRule = ({...props}) => {
    return (
        <div className="horizontal-rule">
            <div className="horizontal-rule-taper"></div>
            <div className="horizontal-rule-full"></div>
            <div className="horizontal-rule-taper"></div>
        </div>
    );
};

HorizontalRule.propTypes = {
};

HorizontalRule.defaultProps = {
};