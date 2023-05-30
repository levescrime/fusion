import React, {useEffect, useState} from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldContent,
    FieldInput,
    CheckboxContainer, TextContainer, CheckboxInput, FieldContainer, ErrorMessage
} from './form_components.styles';
import utils from '../../../utils/utils'
import {isEmpty} from "lodash";

const PortField = props => {
    const {formData, setFormData} = props
    const fieldLabel = "Port";
    const [value, setValue] = useState('');
    const [isSSLChecked, setSSLChecked] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setValue(formData.port)
        setSSLChecked(formData.isSSL)
    },[formData.port, formData.isSSL])

    const handleSubmit = () => {
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
        <FieldContainer>
            <FieldFrame key={fieldLabel}>
                <FormField isPortField={true} isError={isError && !isEmpty(value)}>
                    <FieldLabel isPortField={true}>
                        {fieldLabel}
                    </FieldLabel>
                    <FieldContent>
                        <FieldInput
                            type={"number"}
                            value={value}
                            onChange={handleInputChange}
                            onBlur={handleSubmit}
                        />
                    </FieldContent>
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
        </FieldContainer>
    )
}


export default PortField;
