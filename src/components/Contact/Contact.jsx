import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { IoClose, IoPersonOutline } from 'react-icons/io5';
import {
  ContactIcon,
  ContactItem,
  ContactText,
  ContactDelete,
} from './Contact.styled';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const removeContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
    return toast.info(`Contact ${name} successfully removed!`);
  };
  return (
    <ContactItem>
      <ContactIcon>
        <IoPersonOutline />
      </ContactIcon>
      <ContactText>{name}</ContactText>
      <ContactText>{number}</ContactText>
      <ContactDelete type="button" id={id} onClick={removeContact}>
        <IoClose />
      </ContactDelete>
    </ContactItem>
  );
};

export default Contact;
