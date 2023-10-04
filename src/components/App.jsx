// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { getIsLoading, getError } from '../Redux/Contactsslice';
// import { Form } from './form/form';

import { FilterCon } from './FilterContacts/FilterContacts';
import { ContactList } from './ContactsList/ContactList';
import { Layout } from './Layout';
import { Title, TitleBook } from './App.styled';
import { GlobalStyle } from './GlobalStyled';
import { FormFormik } from './form/FormFormik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from '../Redux/Operations';

export const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetcher());
  }, [dispatch]);

  return (
    <>
      <div>
        {isLoading && <span>Loading contacts....</span>}
        {error && <span>{error.message}</span>}
      </div>
      <Layout>
        <Title>PHONEBOOK</Title>
        <FormFormik />
        <TitleBook>CONTACTS</TitleBook>
        <FilterCon />
        <ContactList />
        <GlobalStyle />
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </Layout>
    </>
  );
};

// const contacts = useSelector(getContacts);

// useEffect(() => {
//   localStorage.setItem('contactList', JSON.stringify(contacts));
// }, [contacts]);
