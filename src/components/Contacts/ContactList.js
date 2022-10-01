import PropTypes from 'prop-types';
import ContactListItem from '../Contacts/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onDeleteButton = contactId => dispatch(deleteContact(contactId));

  const filteredContactList = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = filteredContactList();
  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ name, id, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDeleteButton={onDeleteButton}
              id={id}
            />
          );
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
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteButton: PropTypes.func.isRequired,
};

export default ContactList;
