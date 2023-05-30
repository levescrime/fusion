import styled from '@emotion/styled';
import theme from '../../../constants/theme';

export const FieldFrame = styled('div')`
  display: flex;
  margin-bottom: ${({isLast}) => isLast ? 0 : '12px'};
  align-items: center;
`

export const FieldContainer = styled('div')`
  display: flex;
  flex-direction: column;
`

export const ErrorMessage = styled('div')`
  color: red;
  font-size: 14px;
  padding: 5px;
`

export const FormField = styled('div')`
    display: flex;
    align-items: center;
    width:  ${({isPortField}) => isPortField ? '50%' : "100%"};
    border: 2px solid ${theme.colors.graier};
    box-sizing: border-box;
    border-color: ${({isError}) => isError && `${theme.colors.chartsPink}`};
    outline: none;
    font-size: 16px;
    ::placeholder {
        color: ${theme.colors.lightGray};
    }
`;


export const SubmitButton = styled('button')`
  align-self: center;
  font-weight: 600;
  border-radius: 16px;
  width: 200px;
  margin-bottom: 5px;
  height: 5vh;
  background-color:${({disabled}) => !disabled && '#3a87fc'};
  border:none;
  color:white;
  cursor:pointer;
  :disabled{
    background-color:lightgray;
    cursor:not-allowed;
  }
`;

export const FieldLabel = styled('label')`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${({isPortField}) => isPortField ? '120px' : "200px"};
    padding: 14px 18px;
    box-sizing: border-box;
    border-left: 3px solid ${theme.colors.sunflowerYellow};
    border-right: ${({isError}) => isError ? `1px solid ${theme.colors.chartsPink}` : `1px solid ${theme.colors.graier}`};
    font-weight: 500;
`;

export const FieldContent = styled('div')`
    position: relative;
    flex: 1;
    margin: 12px 18px;
    max-height: 100%;
    overflow: auto;
    
    ${({isPercentage}) => isPercentage && `
        display: flex;
    `}
`;

export const CheckboxContainer = styled('div')`
  display: flex;
  margin-left: auto;
  padding: 5px;
  cursor: pointer;
`;

export const TextContainer = styled('div')`
  margin-right: 5px;
  white-space: nowrap;
`;

export const FormType = styled('div')`
  font-weight: 500;
  color: ${({isDisabled}) => isDisabled ? `${theme.colors.lightGray}` : `${theme.colors.darkBlueGray}`};

`;

export const UpArrow = styled('div')`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid white;

`;
export const DownArrow = styled('div')`
  width: 0;
  height: 0;
  margin-top: 5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;

`;
export const BlueContainer = styled('div')`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #3a87fc;
  border-radius: 10px;
cursor: pointer;
`;

export const FieldInput = styled('input')`
    height: 100%;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
    border: none;
    ::placeholder {
        font-weight: 500;
        color: {$theme.colors.lightGray};
    }
`;
export const CheckboxInput = styled('input')`
    height: 100%;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
    border: none;
    ::placeholder {
        font-weight: 500;
        color: {$theme.colors.lightGray};
    }
`;
