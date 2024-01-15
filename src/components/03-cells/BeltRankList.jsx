import React from 'react';
import PropTypes from 'prop-types';
import { BeltRankListItem } from '../02-molecules/BeltRankListItem';

import './BeltRankList.scss';

export const BeltRankList = ({...props}) => {
    const renderedBeltRanks = [];
    for (let i = 0; i < props.beltRanks.length; i++) {
        const nextBeltRank = props.beltRanks[i];
        const listKey = `belt-rank-list-${nextBeltRank.beltColor}-${i}`;
        renderedBeltRanks.push((
            <BeltRankListItem
                key={listKey}
                beltColor={nextBeltRank.beltColor}
                element={nextBeltRank.element}
                descriptionParagraphs={nextBeltRank.descriptionParagraphs}
            />
        ));
    }

    return (
        <ul className="belt-rank-list">
            {renderedBeltRanks}
        </ul>
    );
};

BeltRankList.propTypes = {
    beltRanks: PropTypes.array
};

BeltRankList.defaultProps = {
};