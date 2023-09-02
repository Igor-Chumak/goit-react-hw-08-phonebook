import styled from 'styled-components';

export const ContactListBox = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(3)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  max-width: ${props => props.theme.spacing(140)};
  max-height: calc(100vh - ${props => props.theme.spacing(95)});
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${props => props.theme.spacing(2)};
  border: 1px solid;
  font-weight: 600;
  line-height: 1.2;
  background-color: ${props => props.theme.bg_color.item};
  border-radius: ${props => props.theme.spacing(2)};
  border-color: inherit;
  /* box-shadow: ${props => props.theme.shadows.main}; */
  /* outline: 1px solid; */
`;

export const ContactListNoItems = styled.h3`
  margin-left: auto;
  margin-right: auto;
`;
