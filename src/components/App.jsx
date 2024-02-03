// import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { loadStorage, saveStorage } from './helpers/localeStorage';

import css from './app.module.css';

// const KEY = 'contacts';

const App = () => {
  //on load page
  // useEffect(() => {
  //   const contactList = loadStorage(KEY);
  //   if (contactList) {
  //     setContacts(contactList);
  //   } else {
  //     setContacts([]);
  //   }
  // }, []);

  // //on update state
  // useEffect(() => {
  //   saveStorage(KEY, contacts);
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
