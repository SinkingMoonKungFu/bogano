import React from 'react';
import PropTypes from 'prop-types';

import { BlockTout } from '../01-atoms/BlockTout';
import './BlockToutList.scss';

export const BlockToutList = ({...props}) => {
    let blockTouts = [];
    if (props.blockTouts) {
        props.blockTouts.forEach((nextTout, index) => {
            blockTouts.push((
                <li key={`blockToutList-${nextTout.text.replace(" ", "")}-${index}`}>
                    <BlockTout text={nextTout.text} link={nextTout.link} image={nextTout.image} />
                </li>
            ));
        });
    }

    return (
        <ul className="block-tout-list">
            {blockTouts}
        </ul>
    );
};

BlockToutList.propTypes = {
    blockTouts: PropTypes.array
};

BlockToutList.defaultProps = {
};