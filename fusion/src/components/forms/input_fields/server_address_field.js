import React, {useEffect, useRef, useState} from 'react';

import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldInputContainer,
    FieldInput, ErrorMessage, ColumnFlexContainer
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from 'lodash';


const ServerAddressField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Server Address";
    const placeholder = "example.com";
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        const handleFocus = () => {
            setIsFocused(document.activeElement === inputRef.current);
        };

        document.addEventListener('focus', handleFocus, true);
        return () => {
            document.removeEventListener('focus', handleFocus, true);
        };
    }, []);

    useEffect(() => {
        setValue(formData.serverAddress)
    },[formData.serverAddress])

    const handleSubmit = () => {
        setIsFocused(false)
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
        <ColumnFlexContainer>
            <FieldFrame isError={isError && !isEmpty(value)} key={fieldLabel}>
                <FormField isFocused={isFocused} isError={isError && !isEmpty(value)}>
                    <FieldLabel>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldInputContainer>
                        <FieldInput
                            ref={inputRef}
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            onBlur={handleSubmit}
                        />
                    </FieldInputContainer>
                </FormField>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>Server address invalid!</ErrorMessage>}
        </ColumnFlexContainer>
)
}


export default ServerAddressField;
