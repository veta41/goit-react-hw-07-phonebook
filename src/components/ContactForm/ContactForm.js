import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handlerChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
    const newContact = { name, number, id: nanoid() };
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} already in contact`)
      : dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Label htmlFor="contact_name">Name</Label>
      <Input
        onChange={handlerChange}
        id="contact_name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="contact_number">Number</Label>
      <Input
        onChange={handlerChange}
        value={number}
        id="contact_number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit"> Add contact</Button>
    </Form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
