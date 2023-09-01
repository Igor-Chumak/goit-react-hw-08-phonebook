import PropTypes from 'prop-types';
import { Container, CreateThemeSwitcher } from 'components';
import { HeaderBar } from './Header.styled';

export const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        {children}
        <CreateThemeSwitcher />
      </Container>
    </HeaderBar>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
