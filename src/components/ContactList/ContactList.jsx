import { selectContacts } from 'redux/contacts/selectors';
import { selectContactsFilter } from 'redux/filter/selectors';
import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filtredName = useSelector(selectContactsFilter).toLowerCase();

  const getFiltredContact = () => {
    if (!filtredName || filtredName === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtredName.toLowerCase())
    );
  };
  const filtredContacts = getFiltredContact();

  return (
    <ContactsList>
      {filtredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};

export default ContactList;
