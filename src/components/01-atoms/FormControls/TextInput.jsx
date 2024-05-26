import React from 'react';
import PropTypes from 'prop-types';

import { RandomUtil } from '../../../util/RandomUtil';

import './TextInput.scss';

export const TextInput = ({...props}) => {

    const domId = RandomUtil.getUniqueDOMID();

    return (
        <div className="form-input-field">
            <label for={domId} className="form-input-label">{props.title}</label>
            <input id={domId} placeholder={props.placeholder ? props.placeholder : null} />
        </div>
    );
};

TextInput.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string
};

TextInput.defaultProps = {
};