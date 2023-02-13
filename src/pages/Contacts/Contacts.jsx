import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import ContactForm from '../../components/ContactForm';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <MutatingDots
          height="100"
          width="100"
          color="yellow"
          secondaryColor="blue"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <ContactList />
    </div>
  );
};
export default Contacts;
