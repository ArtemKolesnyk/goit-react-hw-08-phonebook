import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { UserTitle } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserTitle>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </UserTitle>
  );
};

export default UserMenu;
