import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <p>
        Don't have an account? <NavLink to="/registration">Sign up</NavLink>
      </p>
    </div>
  );
};
export default Login;
