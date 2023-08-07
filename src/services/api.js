import axios from 'axios';

const BASE_URL = 'https://64d11ea7ff953154bb7a043b.mockapi.io/contacts';
export const fetchContacts = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
export const addContact = async newContact => {
  const { data } = await axios.post(BASE_URL, newContact);
  return data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`${BASE_URL}/${contactId}`);
  //return response.status === 200;
  return response.data;
};
