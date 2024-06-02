import React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DatePicker } from 'rsuite';
import PropTypes from 'prop-types';
// import { ThemeProvider, createTheme } from '@mui/material/styles'

import { RandomUtil } from '../../../util/RandomUtil';

import { useState } from "react";

import { DatePickerInput } from "rc-datepicker";

import "rc-datepicker/lib/style.css";
import './BasicDatePicker.scss';

export const BasicDatePicker = ({...props}) => {
    const domId = RandomUtil.getUniqueDOMID();
    const [date, setDate] = useState("");

    return (
        <div className="form-input-field">
            <label htmlFor={domId} className="form-input-label">{props.title}</label>
            <DatePickerInput
                id={domId}
                onChange={(jsDate, dateString) => {
                    const formattedDateString = dateString.slice(0, dateString.indexOf('T'))
                    if (props.onChange) {
                        props.onChange(formattedDateString);
                    }
                }}
                placeholder={props.placeholder}
                value={date}
                className="datepicker"
            />
        </div>
    );
};

BasicDatePicker.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func
};

BasicDatePicker.defaultProps = {
};
