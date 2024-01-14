import React from 'react';
import PropTypes from 'prop-types';

import './SitemapColumn.scss';
import { normalizeToBasePath } from '../../util/Url';

export const SitemapColumn = ({...props}) => {
    let links = [];
    if (props.links) {
        props.links.forEach((linkVal, index) => {
            const link = normalizeToBasePath(linkVal.link);
            const linkKey = `${linkVal.title}-${index}`;
            links.push((
                <li key={linkKey}>
                    <a href={link}>{linkVal.title}</a>
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

    const singleLink = normalizeToBasePath(props.link);
    const singleLinkVariant = (
        <a href={singleLink}><h5>{props.title}</h5></a>
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

SitemapColumn.propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
    link: PropTypes.string,
};

SitemapColumn.defaultProps = {
};