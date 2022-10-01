import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Label, Input, FilterText } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));
  return (
    <Label>
      <FilterText>Find contacts by name</FilterText>
      <Input
        onChange={handleChangeFilter}
        type="text"
        name="filter"
        value={filter}
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
