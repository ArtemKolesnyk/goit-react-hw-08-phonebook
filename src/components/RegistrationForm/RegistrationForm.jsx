import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from '../ContactForm/ContactForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const dataForm = e.currentTarget;
    dispatch(
      registration({
        name: dataForm.name.value,
        email: dataForm.email.value,
        password: dataForm.password.value,
      })
    );
    dataForm.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Username
        <Input
          type="text"
          name="name"
          required
          placeholder="Anna Smith"
          minLength={3}
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
          placeholder="mail@gmail.com"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          minLength={7}
          required
          placeholder="*******"
        />
      </Label>
      <Button type="submit">Registration</Button>
    </Form>
  );
};
