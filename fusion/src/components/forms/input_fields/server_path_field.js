import React, {useEffect, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldContent,
    FieldInput, FieldContainer, ErrorMessage,
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";


const ServerPathField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Server Path";
    const placeholder = "/calendars/users/";
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setValue(formData.serverPath)
    },[formData.serverPath])

    const handleSubmit = () => {
        if(utils.validateServerPath(value)){
            setIsError(false)
            const newFormData = {...formData, serverPath: value}
            setFormData(newFormData)
        }else{
            setIsError(true)
        }
    }

    const handleChange = (e) => {
        const val = e.target.value;
        setIsError(false)
        setValue(val)
    }

    return (
        <FieldContainer>
            <FieldFrame key={fieldLabel}>
                <FormField isError={isError && !isEmpty(value)}>
                    <FieldLabel>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldContent>
                        <FieldInput
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            onBlur={handleSubmit}
                        />
                    </FieldContent>
                </FormField>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>Server path invalid!</ErrorMessage>}
        </FieldContainer>
    )
}


export default ServerPathField;
