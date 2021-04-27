import React from 'react';
import "./styles.scss";

const Service = () => {
  return (
    <section className = "services sec-width" id = "services">
            <div className = "title">
                <h2>services</h2>
            </div>
            <div className = "services-container">
                {/* single service  */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-utensils"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Service Repas / sur commande</h2>
                        <p>Cyril et sa femme Aude peuvent sur commande 24h à l'avance, vous préparer de bons petits plats.
                        </p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* <!-- end of single service -->
                <!-- single service --> */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-water"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Accès à la rivière</h2>
                        <p>Vous avez accès à un petit creek qui traverse la propriété. L'eau y est fraîche et les crevettes sont délicieuses. N'hésitez pas à vous y baigner. </p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* <!-- end of single service -->
                <!-- single service --> */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-sink"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Sanitaires</h2>
                        <p>Les sanitaires se trouvent à l'exterieur de chaque logements et sont communs. Les toilettes sont sèches et les douches mouillées.
                        
                        </p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* <!-- end of single service -->
                <!-- single service --> */}
                <article className = "service">
                    <div className = "service-icon">
                        <span>
                            <i className = "fas fa-home"></i>
                        </span>
                    </div>
                    <div className = "service-content">
                        <h2>Cuisine équipée</h2>
                        <p>La cuisine commune est également à l'exterieur, habritée sous un faré. Elle est équipée en electroménager et ustensiles.</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                </article>
                {/* <!-- end of single service --> */}
            </div>
        </section>
  );
};

export default Service;
