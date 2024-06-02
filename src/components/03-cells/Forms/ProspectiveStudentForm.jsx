import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextInput } from '../../01-atoms/FormControls/TextInput';
import { Select } from '../../01-atoms/FormControls/Select';
import { TextArea } from '../../01-atoms/FormControls/TextArea';
import { BasicDatePicker } from '../../01-atoms/FormControls/BasicDatePicker';
import { StandardButton } from '../../01-atoms/Buttons/StandardButton';

import './ProspectiveStudentForm.scss';

export const ProspectiveStudentForm = ({...props}) => {
    const [formData, setFormData] = useState({});

    const adjustFormData = (valueName, value) => {
        let newFormData = formData;
        newFormData[valueName] = value;
        setFormData(newFormData);
    };

    return (
        <div className="form-box">
            <div className="form-box-body">
                <div id="prospective-student-form" className="form form-stacked">
                    <TextInput title="Full Name" placeholder="Roland Deschain" onChange={(data) => adjustFormData("name", data)} />
                    <TextInput title="Email Address" placeholder="roland@gunslingers.net" type="email" onChange={(data) => adjustFormData("email", data)}/>
                    <TextInput title="Phone Number" placeholder="(555) 555-5555" type="tel" onChange={(data) => adjustFormData("phone", data)} />
                    <Select title="Preferred Contact Method" options={["Email", "Text Message", "Phone Call"]} placeholder="Please Choose a Contact Method" onChange={(data) => adjustFormData("contactMethod", data)} />
                    <BasicDatePicker title="Date Interested in Attending" placeholder="mm/dd/yyyy" onChange={(data) => adjustFormData("attendanceDate", data)} />
                    <TextArea title="Additional Information" rows={12} onChange={(data) => adjustFormData("additionalInfo", data)}/>
                    <StandardButton label="Submit"
                        onClick={() => {
                            if (props.onSubmit) {
                                props.onSubmit(formData);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

ProspectiveStudentForm.propTypes = {
    onSubmit: PropTypes.func,
};

ProspectiveStudentForm.defaultProps = {
};