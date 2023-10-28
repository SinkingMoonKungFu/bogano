import React from 'react';
import PropTypes from 'prop-types';

import { SitemapColumn } from '../01-atoms/SitemapColumn';

import './Sitemap.scss';

export const Sitemap = ({...props}) => {
    let sitemapColumns = [];
    if (props.sitemap) {
        props.sitemap.forEach((menuEntry) => {
            sitemapColumns.push(<SitemapColumn dark={props.dark} title={menuEntry.categoryTitle} links={menuEntry.links} />);
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