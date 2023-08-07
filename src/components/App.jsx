import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { AddContact } from './addContactForm/AddContact';
import { ContactList } from './addContactList/ContactList';
import { FilterContact } from './filterContacts/FilterContact';
import { fetchContactsThunk,addContactThunk } from 'redux/contactsOperations';
import css from './app.module.css';
const STORAGE_KEY = 'contacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const number = event.target.number.value.trim();
    // dispatch(setContacts([...contacts, { name, number, id: nanoid() }]));
    dispatch(addContactThunk({name,phone:number,id:nanoid()}))
  };

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts, dispatch]);

  return (
    <div
      className={`${css.container} ${css.containerStar}`}
    >
      <div className={`${css.phoneContainer}`}>
        <h2>PhoneBook:</h2>
        <AddContact onHandleSubmit={onSubmit}></AddContact>
      </div>

      <div className={`${css.contactsContainer}`}>
        <h2>Contacts</h2>
        <FilterContact></FilterContact>
        <ContactList></ContactList>
      </div>

      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
      <div className={`${css.star1}`}></div>
    </div>
  );
};
