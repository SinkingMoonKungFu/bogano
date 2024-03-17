import React from 'react';

import './PricingBlock.scss';

export const PricingBlock = (props) => {
    let renderedPrices = [];
    props.prices.forEach((price) => {
        renderedPrices.push((
            <div className="bottom-line-price-single-line">
                <span className="price-name">{price.name}</span>
                <span className="price-dots"></span>
                <span className="price-actual">{price.price}</span>
            </div>
        ));
    });
    return (
        <div className="pricing-container">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="bottom-line-price">
                {renderedPrices}
            </div>
        </div>
    );
}
