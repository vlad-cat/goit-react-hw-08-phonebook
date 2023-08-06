import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const getContacts = state => state.contacts;
const Contacts = () => {
  const { isLoading, error } = useSelector(getContacts);
  return (
    <>
      <h2>Add new contact</h2>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}

      <h2>My contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
