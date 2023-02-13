import { setFilterContacts } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { Input, Label, Form } from '../ContactForm/ContactForm.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilterContacts(e.target.value));
  };
  return (
    <Form>
      <Label>
        Find contact by name
        <Input type="text" onChange={changeFilter} />
      </Label>
    </Form>
  );
};

export default Filter;
