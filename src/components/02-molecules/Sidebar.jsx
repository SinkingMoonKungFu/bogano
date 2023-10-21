import React from 'react';
import PropTypes from 'prop-types';

import { SidebarEntry } from '../01-atoms/SidebarEntry';
import './Sidebar.scss';

export const Sidebar = ({...props}) => {
    let listElements = [];

    if (props.entries) {
        props.entries.forEach((child, index) => {
            let key = `sidebar-${props.title.split(" ")[0]}-${index}`;
            listElements.push((
                <li className="block-item" key={key}>
                    <SidebarEntry
                        title={child.title}
                        image={child.image}
                        excerpt={child.excerpt}
                        link={child.link}
                    />
                </li>
            ));
        });
    }

    return (
        <section className="sidebar">
            <h2 className="section-title">
                {props.title}
            </h2>
            <ul className="block-list">
                {listElements}
            </ul>
        </section>
    );
};

Sidebar.propTypes = {
    title: PropTypes.string,
    entries: PropTypes.array,
};

Sidebar.defaultProps = {
};