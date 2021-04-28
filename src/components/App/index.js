// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import Customers from '../Customers/Customers';
// import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import BookingForm from '../Form/BookingForm';
import NavBar from '../NavBar/NavBar';
import Room from '../Room/Room';
import Service from '../Service/Service';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
  
    <Router>
      
        <NavBar /> 
        <Service /> 
        <BookingForm /> 
        <Room /> 
        <Customers/>
        <Footer />
      
    </Router>    
  
  </div>
);

// == Export
export default App;
