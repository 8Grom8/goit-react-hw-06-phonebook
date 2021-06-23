import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterChange } from "../../../redux/contacts/contacts.actions";

const Filter = ({ handleChange, filter }) => {
  return (
    <div className="filterStyle">
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        name="filter"
        type="text"
        className="px-4 py-3 rounded-md"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapState = (state) => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatch = {
  handleChange: filterChange,
};

export default connect(mapState, mapDispatch)(Filter);