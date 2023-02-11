import React from 'react';
import AppStyled from './App.styled';
import ConatctForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MutatingDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
// import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home';
// import Layout from 'pages/Layout';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppStyled />
      <section>
        <h1>--PHONEBOOK--</h1>
        <ConatctForm />
        <h2>--CONTACTS--</h2>
        <Filter />
        {isLoading && !error && (
          <MutatingDots
            height="100"
            width="100"
            color="yellow"
            secondaryColor="blue"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <ContactList />
      </section>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
