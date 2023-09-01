import styled from 'styled-components';

export const HeaderBar = styled.header`
  /* margin-top: 12px; */
  margin-bottom: 12px;
  padding: 20px 0;
  /* border-bottom: 1px solid black; */
  background-color: ${props => props.theme.bg_color.item};
  box-shadow: ${props => props.theme.shadows.main};

  & > nav {
    margin-left: 12px;
    display: flex;
    gap: 8px;
  }
`;
