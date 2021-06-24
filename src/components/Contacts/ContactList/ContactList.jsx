import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";


const ContactList = ({ items,  handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
