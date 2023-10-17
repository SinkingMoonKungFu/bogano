import React from 'react';
import PropTypes from 'prop-types';

import { ProfileAvatar } from '../01-atoms/ProfileAvatar';

import './InstructorProfile.scss';

export const InstructorProfile = ({...props}) => {
    const nameNoSpaces = props.name.replace(" ", "");
    let titles = [];
    if (props.roles) {
        props.roles.forEach((title, index) => {
            const key = `instructor-title-${nameNoSpaces}-${index}`;
            titles.push((<h4 className="instructor-profile-title" key={key}>{title}</h4>))
        });
    }

    let bioParagraphs = [];
    if (props.biography) {
        props.biography.forEach((bioPara, index) => {
            const key = `instructor-bio-paragraph-${nameNoSpaces}-${index}`;
            bioParagraphs.push((<p key={key}>{bioPara}</p>))
        });
    }

    return (
        <div className="instructor-profile">
            <ProfileAvatar image={props.image} name={props.name} />
            <div className="instructor-profile-text">
                <h3 className="instructor-profile-name">{props.title && `${props.title} `}{props.name}</h3>
                <div className="instructor-profile-titles">{titles}</div>
                <div className="instructor-profile-bio">
                    {bioParagraphs}
                </div>
            </div>
        </div>
    );
};

InstructorProfile.PropTypes = {
};

InstructorProfile.defaultProps = {
};