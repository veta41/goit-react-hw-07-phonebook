import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';

import { Label, Input, FilterText } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => dispatch(changeFilter(e.target.value));
  return (
    <Label>
      <FilterText>Find contacts by name</FilterText>
      <Input onChange={handleChangeFilter} type="text" name="filter" />
    </Label>
  );
};

export default Filter;
