import React, { useState } from 'react';
import Axios from 'axios';
import "./styles.scss";


const BookingForm = () => {

const url ="http://localhost:8000/api/form/Create"
const [data, setData] = useState({
  chekinDate:"",
  chekoutDate:"",
  adult:"",
  children:"",
  type:"",
  firstName:"",
  email:"",
  tel:"",
  message:"",
})
function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}

function submit(e){
  e.preventDefault();
  Axios.post(url,{
    chekinDate:data.chekinDate,
    chekoutDate:data.chekoutDate,
    adult:data.adult,
    children:data.children,
    type:data.type,
    firstName:data.firstName,
    email:data.email,
    tel:data.tel,
    message:data.message,
  })
  .then(res =>{
    console.log(res.data)
  })
}
  
  return (
    <div className = "book" id="book">

    <form
     className = "book-form"
     onSubmit={(e)=>submit(e)}
     >
        
        <div className = "form-item">
            <label htmlFor = "checkin-date">Date d'arrivée * : </label>
            <input 
              type = "date" 
              id = "chekinDate" 
              name="chekinDate" 
              onChange={(e) => handle(e)}
              value={data.chekinDate}
              required
            />
        </div>
        <div className = "form-item">
            <label htmlFor = "checkout-date">Date de départ * : </label>
            <input 
              type = "date" 
              id = "chekoutDate" 
              name="chekoutDate" 
              onChange={(e) => handle(e)}
              value={data.chekoutDate}
              required
            />
        </div>
        <div className = "form-item">
            <label htmlFor = "adult">Adulte * : </label>
            <input 
              type="number" 
              min = "1" 
              max ="2" 
              placeholder="1" 
              id = "adult" 
              name="adult" 
              onChange={(e) => handle(e)}
              value={data.adult}
              required
            />
        </div>

        <div className = "form-item">
            <label htmlFor = "children">Enfant * : </label>
            <input 
              type="number" 
              min = "0" 
              max ="1" 
              placeholder="0" 
              id ="children" 
              name="children" 
              onChange={(e) => handle(e)}
              value={data.children}
              required
            />
        </div>
        
        <div className = "form-item">
            <label htmlFor = "type">Logement * : </label>
            <select 
              type = "text" 
              id = "type" 
              name="type" 
              placeholder="Choisissez votre logment"
              onChange={(e) => handle(e)}
              
              required
              >
                  <option 
                  value="">--Choisissez votre logement--
                  </option>
                  <option 
                  value= {data.type} 
                  >Yourte mongole
                  
                  </option>
                  <option 
                  value={data.type}>Tente safari
                  </option>
                  <option 
                  value={data.type}>Cabane O Perchée
                  </option>

              </select>

        </div>
        <div className = "form-item">
            <label htmlFor = "firstName">Nom * : </label>
            <input 
              type = "text" 
              id = "firstName" 
              name="firstName" 
              placeholder="Nom"
              onChange={(e) => handle(e)}
              value={data.firstName}
              required
            />
        </div>
        <div className = "form-item">
            <label htmlFor = "firstName">E-mail * : </label>
            <input 
              type = "email" 
              id = "email" 
              name="email" 
              placeholder="Entrez votre adresse mail"
              onChange={(e) => handle(e)}
              value={data.email}
              required
            />
        </div>
        <div className = "form-item">
            <label htmlFor = "tel">Téléphone : </label>
            <input 
              type = "number" 
              id = "tel" 
              name="tel" 
              placeholder="Entrez votre numéro de téléphone"
              onChange={(e) => handle(e)}
              value={data.tel}
            />
        </div>
        <div className = "form-item">
            <label htmlFor = "message">Message : </label>
            <textarea 
              type = "text" 
              id = "message" 
              name="message" 
              placeholder="Ajouter un message"
              onChange={(e) => handle(e)}
              value={data.message}
            />
        </div>
        <div className = "form-item">
            <input 
            type = "submit" 
            className = "btn" 
            value = "Réserver"
            />
        </div>
    </form>

</div>
  );
};

export default BookingForm;
