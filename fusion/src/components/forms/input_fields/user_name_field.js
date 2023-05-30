import React, {useEffect, useRef, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldInputContainer,
    FieldInput, ColumnFlexContainer, ErrorMessage
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";


const UserNameField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "User Name";
    const placeholder = "name@example.com";
    const [value, setValue] = useState("");
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
        setValue(formData.userName)
    },[formData.userName])

    const handleSubmit = () => {
        setIsFocused(false)
        const newFormData  = {...formData, userName: value}
        setFormData(newFormData)
        if(utils.validateEmail(value)){
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
                <FormField   isFocused={isFocused} isError={isError && !isEmpty(value)}>
                    <FieldLabel>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldInputContainer>
                        <FieldInput
                            ref={inputRef}
                            type={"email"}
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            onBlur={handleSubmit}
                        />
                    </FieldInputContainer>
                </FormField>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>User name invalid!</ErrorMessage>}
        </ColumnFlexContainer>
    )
}


export default UserNameField;
