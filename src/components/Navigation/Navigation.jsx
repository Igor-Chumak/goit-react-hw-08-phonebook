import {} from 'react-redux';
import { ISLOGGEDIN } from 'store';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = true; //ISLOGGEDIN;
  console.log('Navigation isLoggedIn :>> ', isLoggedIn);
  return (
    <nav>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </nav>
  );
};
