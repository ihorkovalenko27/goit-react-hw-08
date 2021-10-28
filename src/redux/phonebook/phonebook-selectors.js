import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector([getItems, getFilter], (contacts, filter) => {
  const normalizedContacts = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts),
  );
  return filteredContacts;
});

export const isLoading = state => state.contacts.loading;
