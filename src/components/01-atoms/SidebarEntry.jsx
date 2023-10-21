import React from 'react';
import PropTypes from 'prop-types';

import './SidebarEntry.scss';

export const SidebarEntry = ({...props}) => {
    return (
        <a className="sidebar-block" href={props.link}>
            <div className="sidebar-block-media">
                <img src={props.image} className="sidebar-block-media-img" alt={props.title}></img>
            </div>
            <div className="sidebar-block-body">
                <h2 className="sidebar-block-headline">
                    {props.title}
                </h2>
                <div className="sidebar-block-excerpt">
                    {props.excerpt}
                </div>
            </div>
        </a>
    );
};

SidebarEntry.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    excerpt: PropTypes.string
};

SidebarEntry.defaultProps = {
};