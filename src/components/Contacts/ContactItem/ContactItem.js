import PropTypes from 'prop-types';
import { ContactCard, Name, Number, DeleteBtn } from './ContactItems.styled';

const ContactListItem = ({ name, id, number, onDeleteButton }) => {
  return (
    <ContactCard>
      <Name>{name} :</Name>
      <Number>{number}</Number>
      <DeleteBtn type="button" onClick={() => onDeleteButton(id)}>
        Delete
      </DeleteBtn>
    </ContactCard>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};

export default ContactListItem;
