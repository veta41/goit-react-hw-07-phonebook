import PropTypes from 'prop-types';

import ContactListItem from '../Contacts/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/contactsSelector';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContactList = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = filteredContactList();

  return (
    <List>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contactsList.length > 0 ? (
        contactsList.map(({ name, id, phone }) => {
          return <ContactListItem key={id} name={name} phone={phone} id={id} />;
        })
      ) : (
        <p>Contact list is empty</p>
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
