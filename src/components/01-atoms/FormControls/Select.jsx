import React from 'react';
import PropTypes from 'prop-types';

import { RandomUtil } from '../../../util/RandomUtil';

import './Select.scss';

export const Select = ({...props}) => {

    const domId = RandomUtil.getUniqueDOMID();

    const propOptions = props.options || [];
    let classNames = ["form-input-select"];

    let options = [];
    if (props.placeholder) {
        classNames.push('placeholder-active');
        options.push((<option key={`${domId}-default-value`} className="dropdown-placeholder" disabled>{props.placeholder}</option>));
    }

    propOptions.forEach((value, idx) => {
        options.push(<option key={`${domId}-option-${idx}`}>{value}</option>);
    });

    return (
        <div className="form-input-field">
            <label htmlFor={domId} className="form-input-label">{props.title}</label>
            <select id={domId} className={classNames.join(" ")} defaultValue={props.placeholder} onChange={(evt) => {
                evt.target.classList.remove("placeholder-active");
            }}>
                {options}
            </select>
        </div>
    );
};

Select.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string
};

Select.defaultProps = {
};