// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../Redux/Contactsslice';
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
import { selectContacts } from '../Redux/Contactsslice';
export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetcher());
  }, [dispatch]);

  return (
    <>
      <div>
        {isLoading && <p>Loading contacts....</p>}
        {error && <span>{error}</span>}
      </div>
      <Layout>
        <Title>PHONEBOOK</Title>
        <FormFormik />
        <TitleBook>CONTACTS</TitleBook>
        <FilterCon />
        {contacts.length > 0 ? <ContactList /> : <p>Something wrong....</p>}
        <GlobalStyle />
        <ToastContainer position="top-center" autoClose={1000} theme="dark" />
      </Layout>
    </>
  );
};
