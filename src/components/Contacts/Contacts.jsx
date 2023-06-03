import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

const ContactsList = ({ contactsArray, deleteContact }) => {
  return (
    <ul>
      {contactsArray.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      deleteContact: PropTypes.func,
    })
  ).isRequired,
};

export default ContactsList;
