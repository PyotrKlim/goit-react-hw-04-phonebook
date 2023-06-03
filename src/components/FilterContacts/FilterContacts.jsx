import PropTypes from 'prop-types';
import css from './FilterContacts.module.css';

const FilterContacts = ({ onChange, value }) => {
  return (
    <div className={css.FilterContacts}>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterContacts;
