import React, {useEffect, useState} from 'react';

import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldContent,
    FieldInput, ErrorMessage, FieldContainer
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from 'lodash';


const ServerAddressField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Server Address";
    const placeholder = "example.com";
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setValue(formData.serverAddress)
    },[formData.serverAddress])

    const handleSubmit = () => {
        const newFormData = {...formData, serverAddress: value}
        setFormData(newFormData)
        if(utils.validateServerAddress(value)){
            setIsError(false)
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
            <FieldFrame isError={isError && !isEmpty(value)} key={fieldLabel}>
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
            {isError && !isEmpty(value) && <ErrorMessage>Server address invalid!</ErrorMessage>}
        </FieldContainer>
)
}


export default ServerAddressField;
