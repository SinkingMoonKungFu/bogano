import React from 'react';
import PropTypes from 'prop-types';

import { Definition } from '../01-atoms/Definition';
import './DefinitionList.scss';

export const DefinitionList = ({...props}) => {
    let definitions = [];
    if (props.terms) {
        props.terms.forEach((term, index) => {
            const key = `definition-${term}-${index}`;
            definitions.push((
                <Definition key={key} term={term} definition={props.definitions[index]} />
            ))
        });
    }

    return (
        <dl>
            {definitions}
        </dl>
    );
};

DefinitionList.propTypes = {
    terms: PropTypes.array
};

DefinitionList.defaultProps = {
};