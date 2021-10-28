import React from 'react';
import Section from '../components/section/Section';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactsList/ContactList';
import Filter from '../components/filter/Filter';

const ContactsView = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default ContactsView;
