import styled from '@emotion/styled';

export const FormContainer = styled('div')`
align-self: center;
  padding: 10px;
  width: 600px;
  height: ${({isExpanded}) => isExpanded ? '495px' : '340px'};
  display: flex;
  background-color: white;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: height 0.3s ease-in-out;
`;

export const PageContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
`;