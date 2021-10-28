import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { filterContacts } from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filterContacts(e.currentTarget.value));
  return (
    <label>
      Filter contacts by name{' '}
      <input className={s.input} type="text" value={value} onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;
