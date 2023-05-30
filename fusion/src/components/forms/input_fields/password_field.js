import React, {useEffect, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldContent,
    FieldInput, ErrorMessage, FieldContainer
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";

const PasswordField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Password";
    const placeholder = "Required";
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setValue(formData.password)
    },[formData.password])

    const handleSubmit = () => {
        const newFormData = {...formData, password: value}
        setFormData(newFormData)
        if(utils.validatePassword(value)){
            setIsError(false)
        }else{
            console.log("invalid password")
        }
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
                            type={"password"}
                            id={fieldLabel}
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={handleSubmit}
                        />
                    </FieldContent>
                </FormField>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>password invalid!</ErrorMessage>}
        </FieldContainer>
    )
}


export default PasswordField;
