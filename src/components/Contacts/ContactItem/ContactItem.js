// import PropTypes from 'prop-types';

import { ContactCard, Name, DeleteBtn, Number } from './ContactItems.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const infoDelete = { id, name };
  return (
    <ContactCard>
      <Name>{name} :</Name>
      <Number>{number}</Number>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(deleteContact(infoDelete))}
      >
        Delete
      </DeleteBtn>
    </ContactCard>
  );
};

export default ContactListItem;
