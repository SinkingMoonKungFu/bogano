import React from 'react';
import PropTypes from 'prop-types';

import './RulesList.scss';
import { ClassRule } from '../01-atoms/ClassRule';

export const RulesList = ({...props}) => {
    const rules = [];
    if (props.rules) {
        props.rules.forEach((rule, index) => {
            const ruleKey = `class-rules-rule-${index}`;
            rules.push((
                <ClassRule
                    key={ruleKey}
                    numeral={`${index+1}`}
                    title={rule.title}
                    description={rule.description} />
            ));
        });
    }

    return (
        <div className="rules-list">
            <ol>
                {rules}
            </ol>
        </div>
    );
};

RulesList.propTypes = {
    rules: PropTypes.array
};

RulesList.defaultProps = {
};