import React from 'react';
import {
    FieldFrame,
    FormField,
    FieldLabel,
    FieldInputContainer,
    FormType, UpArrow, DownArrow, BlueContainer
} from './form_components.styles';
const AccountTypeField = props => {
    const {formType, changeFormType} = props
    const fieldLabel = "Account Type";

    return (
        <FieldFrame key={fieldLabel}>
            <FormField>
                <FieldLabel>
                    {fieldLabel}
                </FieldLabel>
                <FieldInputContainer>
                    <FormType>{formType}</FormType>
                </FieldInputContainer>
                <BlueContainer onClick={changeFormType}>
                    <UpArrow/>
                    <DownArrow/>
                </BlueContainer>
            </FormField>
        </FieldFrame>
    )
}


export default AccountTypeField;
