import React from 'react';
import PropTypes from 'prop-types';

import { normalizeToBasePath } from '../../util/Url';

import './ProfileAvatar.scss';

export const ProfileAvatar = ({...props}) => {
    const image = normalizeToBasePath(props.image);

    return (
        <div className="avatar-frame large-avatar">
            <img className="avatar-image" src={image} alt={props.name}></img>
        </div>
    );
};

ProfileAvatar.PropTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
};

ProfileAvatar.defaultProps = {
};