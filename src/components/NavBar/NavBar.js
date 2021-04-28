import React from 'react';
import {useState} from 'react';
import "./styles.scss";
import logo from "../../assets/images/logo1.png";


const NavBar = () => {

  const [showLinks, setShowLinks] = useState(true)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (

    <div>

    {/* Header */}

        <header className="header" id= "header">

        <div className = "head-top">
                  <div className = "site-name">
                      <span><img src={logo} alt="logo tipi" href="#header"/></span>
                  </div>
                  <div className = "site-nav">
                      <span id = "nav-btn" onClick={handleShowLinks}>MENU <i className = "fas fa-bars"></i></span>
                  </div>
              </div>

              <div className = "head-bottom flex">
                  <h2>DES LIEUX IMPROBABLES POUR SE DETENDRE</h2>
                  <p>Nous vous proposons trois styles d'ambiances différentes au sein de notre propriété privée. Une cabane perchée dans les arbres, une tente safari ou encore une yourte mongole pour vous offrir une détente et une experience hors du commun.</p>
                  <a href="#book"><button type = "button" className = "head-btn" > RESERVEZ</button></a>
              </div>
        
      </header>

      {/*Navbar*/}


        <div className ={ `sidenav ${showLinks ? "sidenav" : "show" }` }id = "sidenav">
            <span className = "cancel-btn" onClick={handleShowLinks} id = "cancel-btn">
                <i className = "fas fa-times"></i>
            </span>

            <ul className = "navbar">
                <li><a href = "#accueil">accueil</a></li>
                <li><a href = "#services">services</a></li>
                <li><a href = "#rooms">chambres</a></li>
                <li><a href = "#customers">nos clients</a></li>
            </ul>

            <button className = "btn sign-up"  ><a href="#book">réserver</a></button>


          </div>

      </div>
  );
};

export default NavBar;
