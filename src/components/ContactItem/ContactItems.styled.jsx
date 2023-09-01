import styled from 'styled-components';

export const ContactItem = styled.li`
  padding-bottom: ${props => props.theme.spacing(1)};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: inherit;
  font-weight: normal;
  font-size: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.darkgrey};

  &::before {
    display: inline-block;
    padding-right: 8px;
    color: inherit;
    content: '•';
  }

  &:last-child {
    border-bottom: none;
  }
`;
