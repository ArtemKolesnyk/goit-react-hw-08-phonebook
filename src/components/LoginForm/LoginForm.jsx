import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Label, Button } from '../ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogined = useSelector(state => state.error);

  const handleSubmit = e => {
    e.preventDefault();
    const formValue = e.currentTarget;
    dispatch(
      logIn({
        email: formValue.elements.email.value,
        password: formValue.elements.password.value,
      })
    );
    formValue.reset();
  };

  return (
    <>
      {errorLogined && <div>Error logined</div>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
