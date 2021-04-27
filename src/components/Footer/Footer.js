import React from 'react';
import "./styles.scss";

const Footer = () => {
  return (
    <footer className = "footer">
    <div className = "footer-container">
        <div>
            <h2>A propos de nous </h2>
            <p>Nous sommes Cyril et Aude et suite à de nombreux voyages à travers le monde, nous avons souhaité faire découvrir ces lieux de vie au sein de notre propriété privée.</p>
            <ul className = "social-icons">
                <li className = "flex">
                    <i className = "fa fa-twitter fa-2x"></i>
                </li>
                <li className = "flex">
                    <i className = "fa fa-facebook fa-2x"></i>
                </li>
                <li className = "flex">
                    <i className = "fa fa-instagram fa-2x"></i>
                </li>
            </ul>
        </div>

        <div>
            <h2>Liens utiles</h2>
            <a href = "#customers">Clients</a>
            <a href = "#rooms">Gîtes</a>
            <a href = "#chekinDate">Reservation</a>
        </div>

        <div>
            <h2>Privacy</h2>
            <a href = "#">Nous contacter</a>
            <a href = "#services">Services</a>
        </div>

        <div>
            <h2>Une question ?</h2>
            <div className = "contact-item">
                <span>
                    <i className = "fas fa-map-marker-alt"></i>
                </span>
                <span>
                   5 rue des flambioyants 98000 Boulouparis, Nouvelle-Caledonie
                </span>
            </div>
            <div className = "contact-item">
                <span>
                    <i className = "fas fa-phone-alt"></i>
                </span>
                <span>
                    +687 99 99 99
                </span>
            </div>
            <div className = "contact-item">
                <span>
                    <i className = "fas fa-envelope"></i>
                </span>
                <span>
                    info@atipik.com
                </span>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
