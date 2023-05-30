import React, {useEffect, useRef, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldInputContainer,
    FieldInput, ColumnFlexContainer, ErrorMessage,
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";


const ServerPathField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Server Path";
    const placeholder = "/calendars/users/";
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
        setValue(formData.serverPath)
    },[formData.serverPath])

    const handleSubmit = () => {
        setIsFocused(false)
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
            {isError && !isEmpty(value) && <ErrorMessage>Server path invalid!</ErrorMessage>}
        </ColumnFlexContainer>
    )
}


export default ServerPathField;
