import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  margin-right: ${props => props.theme.spacing(3)};
  padding: 8px 12px;
  /* border: 1px solid black; */
  border-radius: 8px;
  color: black;
  font-weight: 700;
  text-decoration: none;
  transition: 0.1s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  /* background-color: ${props => props.theme.bg_color.btn}; */
  box-shadow: inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px,
    inset rgba(0, 0, 0, 0.4) -8px -8px 18px 5px;

  &:hover,
  &:focus {
    box-shadow: inset rgba(0, 0, 0, 0.4) 8px 8px 18px 5px,
      inset rgba(255, 255, 255, 0.2) -8px -8px 18px 5px;
  }

  &.active {
    color: red;
    box-shadow: inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px,
      inset rgba(0, 0, 0, 0.4) -8px -8px 18px 5px;

    /* background-color: ${props => props.theme.bg_color.btn_active}; */
    /* border: none; */
  }
`;
