import React, {useEffect, useRef, useState} from 'react';
import {FormContainer, PageContainer} from './fusion_form.styles'
import AccountInputField from '../forms/input_fields/account_type_field'
import UserNameField from "./input_fields/user_name_field";
import PasswordField from "./input_fields/password_field";
import ServerAddressField from "./input_fields/server_address_field";
import ServerPathField from "./input_fields/server_path_field";
import PortField from "./input_fields/port_filed";
import {SubmitButton} from "./input_fields/form_components.styles";
import {isEmpty} from "lodash";
import utils from '../../utils/utils'


const FusionForm = props => {
    const ADVANCED = 'Advanced'
    const MANUAL = 'Manual'
    const [formType, setFormType] = useState(ADVANCED);
    const [isValid, setIsValid] = useState(false);
    const inputRef = useRef([]);
    const defaultData = {
        userName: '',
        password: '',
        serverAddress:'',
        serverPath:'',
        port: 0,
        isSSL: false
    }

    const [formData, setFormData] = useState(defaultData);

    useEffect(() => {
        if(!isEmpty(formData.userName) && !isEmpty(formData.password)){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    },[formData])

    useEffect(() => {
        setFormData(defaultData)
    },[formType])

    const handleAccountTypeChange = () => {
        formType === ADVANCED ? setFormType(MANUAL) : setFormType(ADVANCED)
    }

    const handleSubmit = () => {
        if(isValid){
            //payload print
                console.log(`User Name is: ${formData.userName}`)
            if(!utils.validateEmail(formData.userName)){
                console.log(`user name is invalid and should be in the format of: name@example.com`)
            }
                console.log(`password is: ${formData.password}`)
                console.log(`Server Address is: ${formData.serverAddress}`)
            if(!utils.validateServerAddress(formData.serverAddress)){
                console.log(`Server address is invalid and should be in the format of: example.com`)
            }
                if(formType === ADVANCED){
                    console.log(`Server Path is: ${formData.serverPath}`)
                    console.log(`Server Port is: ${formData.port}`)
                    console.log(`Server is using SSL: ${formData.isSSL}`)

                }
        setFormData(defaultData)
        }
    }

    return (
        <PageContainer>
            <FormContainer>
                <AccountInputField formType={formType} changeFormType={handleAccountTypeChange}/>
                <UserNameField
                    formData={formData}
                    setFormData={setFormData}
                />
                <PasswordField
                    formData={formData}
                    setFormData={setFormData}
                />
                <ServerAddressField
                    formData={formData}
                    setFormData={setFormData}
                />
                {formType === ADVANCED &&
                <div>
                    <ServerPathField
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <PortField
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
                }
                <SubmitButton onClick={handleSubmit} disabled={!isValid}>
                    Submit
                </SubmitButton>
            </FormContainer>
        </PageContainer>
    )
}


export default FusionForm;
