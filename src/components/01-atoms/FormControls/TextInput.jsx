import React from 'react';
import PropTypes from 'prop-types';

import { RandomUtil } from '../../../util/RandomUtil';
import { formatPhoneNumberInTextField } from "../../../util/StringUtil";
import './TextInput.scss';

const onTelephoneKeyUp = (event) => {
    event.currentTarget.value = formatPhoneNumberInTextField(event.currentTarget.value, event.keyCode);
    //     var phoneNumberElement = $(this);
    // phoneNumberElement.val(
    //   formatPhoneNumberInTextField(phoneNumberElement.val(), ev.keyCode)
    // );

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
                id={props.id ? props.id : domId}
                defaultValue={defaultValue ? defaultValue : undefined }
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder && !props.value ? props.placeholder : null}
                onKeyUp={props.type === 'tel' ? onTelephoneKeyUp : null}
            />
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

TextInput.defaultProps = {
};