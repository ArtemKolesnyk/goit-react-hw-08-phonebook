import { ContactBtn, Text, ListItem } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
    return toast.info(`Contact ${name} successfully removed!`);
  };
  return (
    <ListItem>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <ContactBtn type="button" id={id} onClick={removeContact}>
        !Delete!
      </ContactBtn>
    </ListItem>
  );
};

export default Contact;
