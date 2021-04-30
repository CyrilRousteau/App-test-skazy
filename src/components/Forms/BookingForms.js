import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import axios from "axios";
import "./styles.scss";


class BookingForms extends Component {

  
  constructor(){
    super()
        this.state = {
          chekinDate:"",
          chekoutDate:"",
          adult:"",
          children:"",
          type:"  ",
          firstName:"",
          email:"",
          tel:"",
          message:""
        }
        this.changeChekinDate = this.changeChekinDate.bind(this)
        this.changeChekoutDate = this.changeChekoutDate.bind(this)
        this.changeAdult = this.changeAdult.bind(this)
        this.changeChildren = this.changeChildren.bind(this)
        this.changeType = this.changeType.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeTel = this.changeTel.bind(this)
        this.changeMessage = this.changeMessage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

      }
      
      changeChekinDate(e){
        this.setState({
          chekinDate:e.target.value
        })
      }
      changeChekoutDate(e){
        this.setState({
          chekoutDate:e.target.value
        })
      }
      changeAdult(e){
        this.setState({
          adult:e.target.value
        })
      }
      changeChildren(e){
        this.setState({
          children:e.target.value
        })
      }
      changeType(e){
        this.setState({
          type:e.target.value
        })
      }
      changeFirstName(e){
        this.setState({
          firstName:e.target.value
        })
      }
      changeEmail(e){
        this.setState({
          email:e.target.value
        })
      }
      changeTel(e){
        this.setState({
          tel:e.target.value
        })
      }
      changeMessage(e){
        this.setState({
          message:e.target.value
        })
      }
      onSubmit(event){
        event.preventDefault()

        const bookForm = {
          chekinDate:this.state.chekinDate,
          chekoutDate:this.state.chekoutDate,
          adult:this.state.adult,
          children:this.state.children,
          type:this.state.type,
          firstName:this.state.firstName,
          email:this.state.email,
          tel:this.state.tel,
          message:this.state.message
        }
        axios.post('http://localhost:4000/app/form', bookForm)
        .then(response => console.log(response.data))

        this.setState({
          chekinDate:"",
          chekoutDate:"",
          adult:"",
          children:"",
          type:"  ",
          firstName:"",
          email:"",
          tel:"",
          message:""
        })

      }
      
      render() {
      
      return (
        <div className = "book" id="book">

      <form
       className = "book-form"
       onSubmit={this.onSubmit}
       >
          
          <div className = "form-item">
              <label htmlFor = "checkin-date">Date d'arrivée * : </label>
              <input 
                type = "date" 
                id = "chekinDate" 
                name="chekinDate" 
                onChange={this.changeChekinDate}
                value={this.state.chekinDate}
                //required
              />
          </div>
          <div className = "form-item">
              <label htmlFor = "checkout-date">Date de départ * : </label>
              <input 
                type = "date" 
                id = "chekoutDate" 
                name="chekoutDate" 
                onChange={this.changeChekoutDate}
                value={this.state.chekoutDate}
                //required
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
                onChange={this.changeAdult}
                value={this.state.adult}
                //required
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
                onChange={this.changeChildren}
                value={this.state.children}
                //required
              />
          </div>
          
          <div className = "form-item">
              <label htmlFor = "type">Logement * : </label>
              <select 
                type = "text" 
                id = "type" 
                name="type" 
                placeholder="Choisissez votre logment"
                onChange={this.changeType}
                value={this.state.type}
                //required
                >
                    <option 
                    value= "Yourte mongole" 
                    >Yourte mongole
                    
                    </option>
                    <option 
                    value="Tente safari">Tente safari
                    </option>
                    <option 
                    value="Cabane O Perchée">Cabane O Perchée
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
                onChange={this.changeFirstName}
                value={this.state.firstName}
                //required
              />
          </div>
          <div className = "form-item">
              <label htmlFor = "firstName">E-mail * : </label>
              <input 
                type = "email" 
                id = "email" 
                name="email" 
                placeholder="Entrez votre adresse mail"
                onChange={this.changeEmail}
                value={this.state.email}
                //required
              />
          </div>
          <div className = "form-item">
              <label htmlFor = "tel">Téléphone : </label>
              <input 
                type = "number" 
                id = "tel" 
                name="tel" 
                placeholder="Entrez votre n° de tel"
                onChange={this.changeTel}
                value={this.state.tel}
              />
          </div>
          <div className = "form-item">
              <label htmlFor = "message">Message : </label>
              <textarea 
                type = "text" 
                id = "message" 
                name="message" 
                placeholder="Ajouter un message"
                onChange={this.changeMessage}
                value={this.state.message}
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
    )
  }
 
};

export default BookingForms;
