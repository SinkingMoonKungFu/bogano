import React from 'react';
import PropTypes from 'prop-types';

import './ImageExplanationList.scss';
import { ImageExplanation } from '../02-molecules/ImageExplanation';

export const ImageExplanationList = ({...props}) => {
    let count = 0;
    let renderedImages = [];
    props.images.forEach((nextImage) => {
        const listKey = `rendered-image-explanation-${count}`;
        count++;
        renderedImages.push(
                <ImageExplanation
                    key={listKey}
                    image={nextImage.image}
                    size={nextImage.size}
                    imageDescription={nextImage.imageDescription}
                    explanationParagraphs={nextImage.explanationParagraphs}
                />
            )
    });

    return (
        <div className="image-explanation-list">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            {renderedImages}
        </div>
    );
};

ImageExplanationList.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array
};

ImageExplanationList.defaultProps = {
};