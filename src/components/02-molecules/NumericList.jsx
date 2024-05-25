import React from 'react';
import PropTypes from 'prop-types';

import { NumberedListItem } from '../01-atoms/NumberedListItem';

import './NumericList.scss';

export const NumericList = ({...props}) => {
    const items = [];
    if (props.items) {
        props.items.forEach((item, index) => {
            const itemKey = `numeric-list-item-${index}`;
            items.push((
                <NumberedListItem
                    key={itemKey}
                    numeral={index+1}
                    title={item.title}
                    description={item.description}
                    color={props.color ? props.color : null}
                    />
            ));
        });
    }

    return (
        <div className="numeric-list">
            <ol>
                {items}
            </ol>
        </div>
    );
};

NumericList.propTypes = {
    items: PropTypes.array,
    color: PropTypes.string,
};

NumericList.defaultProps = {
};