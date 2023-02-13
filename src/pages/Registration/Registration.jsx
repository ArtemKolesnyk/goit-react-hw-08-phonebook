import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { NavLink } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <h2>Regisration</h2>
      <RegistrationForm />
      <p>
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </div>
  );
};
export default Registration;
