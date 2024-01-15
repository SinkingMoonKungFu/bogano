import React from 'react';
import PropTypes from 'prop-types';

import { SitemapColumn } from '../01-atoms/SitemapColumn';

import './Sitemap.scss';

export const Sitemap = ({...props}) => {
    let sitemapColumns = [];
    let sitemapItem = 0;
    if (props.sitemap) {
        props.sitemap.forEach((menuEntry) => {
            const listKey = `sitemap-list-item-${sitemapItem}`;
            sitemapItem++;
            sitemapColumns.push(<SitemapColumn key={listKey} dark={props.dark} title={menuEntry.categoryTitle} links={menuEntry.links} />);
        });
    }

    return (
        <div className="sitemap">
            {sitemapColumns}
        </div>
    );
};

Sitemap.propTypes = {
    sitemap: PropTypes.array
};

Sitemap.defaultProps = {
};