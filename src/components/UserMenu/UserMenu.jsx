import { ButtonLogOut, UserName, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Wrapper>
      <UserName>Welcome, Igor</UserName>
      <ButtonLogOut type="button" onClick={() => console.log('LogOut ...')}>
        Logout
      </ButtonLogOut>
    </Wrapper>
  );
};
