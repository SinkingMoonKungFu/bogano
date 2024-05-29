import React from 'react';
import PropTypes from 'prop-types';

import { RandomUtil } from '../../../util/RandomUtil';

import './_forms.scss';

export const TextArea = ({...props}) => {
    const domId = RandomUtil.getUniqueDOMID();
    return (
        <div className="form-input-field">
            <label htmlFor={domId} className="form-input-label">{props.title}</label>
            <textarea
                id={domId}
                rows={props.rows}
                placeholder={props.placeholder ? props.placeholder : undefined}
            />
        </div>
    );
};

TextArea.propTypes = {
    title: PropTypes.string,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
};

TextArea.defaultProps = {
    rows: 10
};
