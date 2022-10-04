import PropTypes from 'prop-types';

import { ContactCard, Name, DeleteBtn, Number } from './ContactItems.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ContactCard>
      <Name>{name} :</Name>
      <Number>{phone}</Number>
      <DeleteBtn type="button" onClick={onDeleteContact}>
        Delete
      </DeleteBtn>
    </ContactCard>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
