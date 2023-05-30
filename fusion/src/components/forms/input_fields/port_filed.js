import React, {useEffect, useRef, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldInputContainer,
    FieldInput,
    CheckboxContainer, TextContainer, CheckboxInput, ColumnFlexContainer, ErrorMessage
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";

const PortField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Port";
    const [value, setValue] = useState('');
    const [isSSLChecked, setSSLChecked] = useState(false);
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
        setValue(formData.port)
        setSSLChecked(formData.isSSL)
    },[formData.port, formData.isSSL])

    const handleSubmit = () => {
        setIsFocused(false)
        if(utils.validatePort(value)){
            setIsError(false)
            const newFormData = {...formData, port: value}
            setFormData(newFormData)
        }else{
            setIsError(true)
        }
    }

    const handleSSLChange = () => {
        setSSLChecked(!isSSLChecked)
        const newFormData = {...formData, isSSl: !isSSLChecked}
        setFormData(newFormData)
    }

    const handleInputChange = (e) => {
        const val  = e.target.value;
        if(val >= 0 && val <= 65535){
            setIsError(false)
            setValue(val)
        }else{
            setIsError(true)
        }
    }

    return (
        <ColumnFlexContainer>
            <FieldFrame key={fieldLabel}>
                <FormField isFocused={isFocused} isPortField={true} isError={isError && !isEmpty(value)}>
                    <FieldLabel isPortField={true}>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldInputContainer>
                        <FieldInput
                            ref={inputRef}
                            type={"number"}
                            value={value}
                            onChange={handleInputChange}
                            onBlur={handleSubmit}
                        />
                    </FieldInputContainer>
                </FormField>
                <CheckboxContainer>
                    <TextContainer>
                        Use SSL
                    </TextContainer>
                    <CheckboxInput
                        type={"checkbox"}
                        checked={isSSLChecked}
                        onChange={handleSSLChange}
                    />
                </CheckboxContainer>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>Port invalid!</ErrorMessage>}
        </ColumnFlexContainer>
    )
}


export default PortField;
