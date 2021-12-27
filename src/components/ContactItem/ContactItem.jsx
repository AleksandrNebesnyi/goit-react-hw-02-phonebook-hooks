import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactItem.styled';

// Принимает один контакт и метод для удаления контакта
const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number, id } = contact;
  return (
    <Item>
      <Name>{name}: </Name>
      <Number href={`tel:${number}`}>{contact.number}</Number>
      <Button
        type="button"
        onClick={() => onDeleteContact(id)} // Метод на клике, принимает ID контакта
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
