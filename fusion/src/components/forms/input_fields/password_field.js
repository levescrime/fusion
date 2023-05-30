import React, {useEffect, useRef, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldInputContainer,
    FieldInput, ErrorMessage, ColumnFlexContainer
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";

const PasswordField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Password";
    const placeholder = "Required";
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
        setValue(formData.password)
    },[formData.password])

    const handleSubmit = () => {
        setIsFocused(false)
        const newFormData = {...formData, password: value}
        setFormData(newFormData)
        if(utils.validatePassword(value)){
            setIsError(false)
        }else{
            console.log("invalid password")
        }
    }

    return (
        <ColumnFlexContainer>
            <FieldFrame key={fieldLabel}>
                <FormField isFocused={isFocused} isError={isError && !isEmpty(value)}>
                    <FieldLabel>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldInputContainer>
                        <FieldInput
                            type={"password"}
                            ref={inputRef}
                            id={fieldLabel}
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={handleSubmit}
                        />
                    </FieldInputContainer>
                </FormField>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>password invalid!</ErrorMessage>}
        </ColumnFlexContainer>
    )
}


export default PasswordField;
