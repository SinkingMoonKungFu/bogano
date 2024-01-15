import React from 'react';
import PropTypes from 'prop-types';
import { BlockBeltRankImage } from '../01-atoms/BlockBeltRankImage';
import { toTitleCase } from '../../util/StringUtil';

import "./BeltRankListItem.scss";

export const BeltRankListItem = (props) => {
    let blockBeltRankParagraphs = [];
    for (let i = 0; i < props.descriptionParagraphs.length; i++) {
        let listKey = `belt-description-paragraph-${props.title}-${i}`;
        blockBeltRankParagraphs.push((<p key={listKey} className="belt-description-paragraph">{props.descriptionParagraphs[i]}</p>));
    }

    let title = `${toTitleCase(props.beltColor)} Belt`;
    let image = `/images/${props.beltColor}belt.jpg`;

    return (
        <ul>
            <li className="belt-rank-list-item">
                <span className="block-belt-rank">
                    <BlockBeltRankImage
                        description={`${title} - ${props.element}`}
                        color={props.beltColor}
                        image={image}
                    />
                    <div className="block-belt-rank-body">
                        <h2 className="block-belt-rank-title">{title}</h2>
                        <div className="block-belt-rank-description">{blockBeltRankParagraphs}</div>
                    </div>
                </span>
            </li>
        </ul>
    );
};


BeltRankListItem.propTypes = {
    title: PropTypes.string,
    beltColor: PropTypes.string,
    element: PropTypes.string,
    descriptionParagraphs: PropTypes.array,
};
