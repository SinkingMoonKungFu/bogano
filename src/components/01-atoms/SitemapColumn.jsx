import React from 'react';
import PropTypes from 'prop-types';

import './SitemapColumn.scss';

export const SitemapColumn = ({...props}) => {
    let links = [];
    if (props.links) {
        props.links.forEach((linkVal, index) => {
            const linkKey = `${linkVal.title}-${index}`;
            links.push((
                <li key={linkKey}>
                    <a href={linkVal.link}>{linkVal.title}</a>
                </li>
            ));
        });
    }

    const submenuVariant = (
        <>
            <h5>{props.title}</h5>
            <ul>
                {links}
            </ul>
        </>
    );

    const singleLinkVariant = (
        <a href={props.link}><h5>{props.title}</h5></a>
    )

    let classNames = ['sitemap-column'];
    if (props.dark) {
        classNames.push('dark');
    }

    return (
        <div className={classNames.join(' ')}>
            {props.links ? submenuVariant : singleLinkVariant}
        </div>
    );
};

SitemapColumn.PropTypes = {
    title: PropTypes.string,
    links: PropTypes.array
};

SitemapColumn.defaultProps = {
};