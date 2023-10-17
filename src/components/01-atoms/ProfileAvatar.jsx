import React from 'react';
import PropTypes from 'prop-types';

import './ProfileAvatar.scss';

export const ProfileAvatar = ({...props}) => {
    return (
        <div className="avatar-frame large-avatar">
            <img className="avatar-image" src={props.image} alt={props.name}></img>
        </div>
    );
};

ProfileAvatar.PropTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
};

ProfileAvatar.defaultProps = {
};