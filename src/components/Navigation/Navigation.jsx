import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Nav, NavAuthBox, NavBox } from './Navigation.styled';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavBox>
      <Nav to="/">Home</Nav>
      {isLoggedIn ? (
        <Nav to="/contacts">Contacts</Nav>
      ) : (
        <NavAuthBox>
          {!isLoggedIn && <Nav to="/registration">Registration</Nav>}
          {!isLoggedIn && <Nav to="/login">Log In</Nav>}
        </NavAuthBox>
      )}
      {isLoggedIn && <UserMenu />}
    </NavBox>
  );
};
export default Navigation;
