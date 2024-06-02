import React from 'react';
import PropTypes from 'prop-types';

import { RandomUtil } from '../../../util/RandomUtil';
import { formatPhoneNumberInTextField } from "../../../util/StringUtil";
import './TextInput.scss';

const onTelephoneKeyUp = (event) => {
    event.currentTarget.value = formatPhoneNumberInTextField(event.currentTarget.value, event.keyCode);
};

export const TextInput = ({...props}) => {
    const domId = RandomUtil.getUniqueDOMID();

    let defaultValue = props.value;
    if (defaultValue) {
        if (props.type === 'tel') {
            defaultValue = formatPhoneNumberInTextField(defaultValue, null);
        }
    }

    return (
        <div className="form-input-field">
            <label htmlFor={domId} className="form-input-label">{props.title}</label>
            <input
                className="text-input"
                id={props.id ? props.id : domId}
                defaultValue={defaultValue ? defaultValue : undefined }
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder && !props.value ? props.placeholder : null}
                onKeyUp={props.type === 'tel' ? onTelephoneKeyUp : null}
                onChange={(event) => {
                    props.onChange ? props.onChange(event.target.value) : () => {}
                }}
            />
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

TextInput.defaultProps = {
};