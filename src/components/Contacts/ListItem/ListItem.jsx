import PropTypes from "prop-types";

const ListItem = ({ item, handleDelete }) => {
  const {  name, number } = item;

  return (
    <li>
      <div>
        <span> { name }:{number}</span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListItem;