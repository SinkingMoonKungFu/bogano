import React from 'react';
import PropTypes from 'prop-types';

import { HeaderBar } from '../02-molecules/HeaderBar';
import { Sidebar } from '../02-molecules/Sidebar';
import { SitemapFooter } from '../03-cells/SitemapFooter';

import './InfoPage.scss';
import { normalizeToBasePath } from '../../util/Url';

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

    let sidebar = "";
    if (props.sidebar) {
        sidebar = (
            <Sidebar {...props.sidebar} />
        )
    }

    const mainImage = normalizeToBasePath(props.mainImage);

    return (
        <>
            <HeaderBar menu={props.menu} window={props.window} />
            <main role="main">
                <div className="info-page">
                    <h1 className="infopage-title">{props.title}</h1>
                    <section className={props.sidebar ? "infoSection withSidebar" : "infoSection noSidebar"}>
                        <div className="textContent">
                            {topLevelParagraphs}
                            <img className="textContent-image" src={mainImage} alt={`${props.title} Image`}></img>
                            {props.children}
                        </div>
                        { sidebar }
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

InfoPage.propTypes = {
    title: PropTypes.string,
    menu: PropTypes.array,
    topParagraphs: PropTypes.array,
    sitemap: PropTypes.array,
};

InfoPage.defaultProps = {
};