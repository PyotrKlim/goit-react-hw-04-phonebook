import { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default function ContactForm({ sent }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля option - ${name} не обрабатываеться`);
    }
  };

  const handSubmit = e => {
    e.preventDefault();

    const newContact = { name, number };
    sent(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.Phonebook}>
      <h1>Phonebook</h1>
      <form onSubmit={handSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          value={number}
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  sent: PropTypes.func.isRequired,
};
