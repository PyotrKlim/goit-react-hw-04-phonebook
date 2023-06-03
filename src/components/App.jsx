import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import FilterContacts from './FilterContacts/FilterContacts';
import { useEffect } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.getItem('contacts') &&
      setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = newContact => {
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(newContact.name + 'is already in contacts');
      return;
    }
    setContacts(prev => [{ ...newContact, id: nanoid() }, ...prev]);
    setFilter('');
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <ContactForm sent={formSubmitHandler} />
      <FilterContacts onChange={onFilterChange} value={filter} />
      {contacts.length > 0 && (
        <ContactsList
          contactsArray={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      )}
    </>
  );
}
