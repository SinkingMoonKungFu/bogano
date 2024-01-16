import React from 'react';
import PropTypes from 'prop-types';

import './ImageExplanation.scss';

export const ImageExplanation = ({...props}) => {
    let count = 0;
    let renderedParagraphs = [];
    let maxWidth = '100px';
    switch (props.size) {
        case 'small':
            maxWidth = '48px';
            break;
        case 'medium':
            maxWidth = '100px';
    }

    const overriddenStyle = {
        "maxWidth": maxWidth
    };

    props.explanationParagraphs.forEach((nextExplanation) => {
        const listKey = `paragraph-image-explanation-${count}`;
        count++;
        renderedParagraphs.push((
            <p key={listKey}>{nextExplanation}</p>
        ))
    });

    return (
        <div className="image-with-explanation">
            <div className="image-container">
                <img style={overriddenStyle} src={props.image} alt={props.imageDescription}></img>
            </div>
            <div className="explanation">
                <h3>{props.imageDescription}</h3>
                <div className="explanation-paragraphs">
                    {renderedParagraphs}
                </div>
            </div>
        </div>
    );
};

ImageExplanation.propTypes = {
    image: PropTypes.string,
    imageDescription: PropTypes.string,
    explanationParagraphs: PropTypes.array
};

ImageExplanation.defaultProps = {
};