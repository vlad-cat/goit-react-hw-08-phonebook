import React, { useEffect } from 'react';
import ContactListItem from 'components/ContactListItem';
import contactListStyles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const { contactsItem, isLoading, error } = useSelector(
    state => state.contacts
  );
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contactsItem.filter(contact => {
    if (typeof contact.name === 'string') {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    }
    return false;
  });

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ul className={contactListStyles.list}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
