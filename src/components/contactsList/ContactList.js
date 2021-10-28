import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts, isLoading } from '../../redux/phonebook/phonebook-selectors';
// import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { deleteContacts, fetchContacts } from '../../redux/phonebook/phonebook-operations';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContacts = id => dispatch(deleteContacts(id));
  return (
    <>
      <h2>Contacts</h2>
      {loading && <div>Загружаю...</div>}
      <ul className={s.contacts}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span> <span>{number}</span>
            <button className={s.btn} type="button" onClick={() => handleDeleteContacts(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
