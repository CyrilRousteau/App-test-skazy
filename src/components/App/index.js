// == Import npm
import React from 'react';
import Customers from '../Customers/Customers';
import Footer from '../Footer/Footer';
import BookingForm from '../Form/BookingForm';
import NavBar from '../NavBar/NavBar';
import Room from '../Room/Room';
import Service from '../Service/Service';
import Test from '../Test/Test';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <Service />
    <BookingForm />
    <Room />
    <Customers />
    <Footer />
    <Test />
  </div>
);

// == Export
export default App;
