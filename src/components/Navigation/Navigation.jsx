import { useAuth } from 'hooks';
import { NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
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
