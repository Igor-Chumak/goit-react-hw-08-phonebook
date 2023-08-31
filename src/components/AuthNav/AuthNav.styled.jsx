import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  /* display: inline-block; */
  padding: 8px 12px;
  border-radius: 8px;
  color: black;
  font-weight: 700;
  text-decoration: none;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &.active {
    color: red;
    background-color: #e9e8e8;
  }
`;
