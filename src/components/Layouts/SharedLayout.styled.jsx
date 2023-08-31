import styled from 'styled-components';

export const Header = styled.header`
  margin-top: 12px;
  margin-bottom: 12px;
  padding: 8px 0;
  /* border-bottom: 1px solid black; */
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  /* box-shadow: 0px 4px 10px 4px #9e9e9e; */

  & > nav {
    margin-left: 12px;
    display: flex;
    gap: 8px;
  }
`;
