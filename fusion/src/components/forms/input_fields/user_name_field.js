import React, {useEffect, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldContent,
    FieldInput, FieldContainer, ErrorMessage
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";


const UserNameField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "User Name";
    const placeholder = "name@example.com";
    const [value, setValue] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setValue(formData.userName)
    },[formData.userName])

    const handleSubmit = () => {
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
        if(isEmpty(val)){
            setIsError(false)
        }
        setValue(val)
    }

    return (
        <FieldContainer>
            <FieldFrame  key={fieldLabel}>
                <FormField isError={isError && !isEmpty(value)}>
                    <FieldLabel>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldContent>
                        <FieldInput
                            type={"email"}
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            onBlur={handleSubmit}
                        />
                    </FieldContent>
                </FormField>
            </FieldFrame>
            {isError && !isEmpty(value) && <ErrorMessage>user name invalid!</ErrorMessage>}
        </FieldContainer>
    )
}


export default UserNameField;
