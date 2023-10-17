import React from 'react';
import PropTypes from 'prop-types';

import { HeaderBar } from '../02-molecules/HeaderBar';
import { SitemapFooter } from '../03-cells/SitemapFooter';

import './InfoPage.scss';

export const InfoPage = ({...props}) => {
    let topLevelParagraphs = [];
    if (props.topParagraphs) {
        props.topParagraphs.forEach((para, index) => {
            let key = `infoPage-topParagraphs-${index}`;
            topLevelParagraphs.push((
                <p key={key}>{para}</p>
            ));
        });
    }

    return (
        <>
            <HeaderBar menu={props.menu} />
            <main role="main">
                <div className="info-page">
                    <h1 className="infopage-title">{props.title}</h1>
                    <section className="infoSection-withSidebar">
                        <div className="textContent">
                            {topLevelParagraphs}
                            <img className="textContent-image" src={props.mainImage} alt={`${props.title} Image`}></img>
                        </div>
                        <div className="sidebar"></div>
                    </section>
                </div>
                <SitemapFooter
                    logoTitle={"Sinking Moon School of Kung Fu"}
                    copyrightInfo={
                        "© Copyright 2023 Sinking Moon School of Kung Fu. All rights reserved."
                    }
                    logoLink={"/"}
                    imageAcknowledgementsLink={"/acknowledgements"}
                    sitemap={props.sitemap}
                />
            </main>
        </>
    );
};

InfoPage.PropTypes = {
    title: PropTypes.string,
    menu: PropTypes.array,
    topParagraphs: PropTypes.array,
};

InfoPage.defaultProps = {
};