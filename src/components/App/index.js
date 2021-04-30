// == Import npm
import React from 'react';
import Customers from '../Customers/Customers';
// import Error from '../Error/Error';
import Footer from '../Footer/Footer';
// import BookingForm from '../Form/BookingForm';
import BookingForms from '../Forms/BookingForms';
import NavBar from '../NavBar/NavBar';
import Room from '../Room/Room';
import Service from '../Service/Service';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
  
      
        <NavBar /> 
        <Service /> 
        {/* <BookingForm />  */}
        <BookingForms />
        <Room /> 
        <Customers/>
        <Footer />
      
  
  </div>
);

// == Export
export default App;
