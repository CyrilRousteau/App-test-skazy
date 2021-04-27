import React from 'react';
import "./styles.scss";
import img2 from "../../assets/images/img2.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";

const Customers = () => {
  return (
        <section className = "customers" id = "customers">
        <div className = "sec-width">
            <div className = "title">
                <h2>clients</h2>
            </div>
            <div className = "customers-container">
                {/* <!-- single customer --> */}
                <div className = "customer">
                    <div className = "rating">
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "far fa-star"></i></span>
                    </div>
                    <h3>Comfortable Living</h3>
                    <p>Such a lovely tiny cabin in the wood. We loved our journey. Cyril is such a friendly host and we spent a great night earing the famous "Notou" all night long. Our daughter had a good sleep too thanks a very cosy extra bed on the mezzanine. We recommand !</p>
                    <img src = {img2} alt = "customer image"></img>
                    <span>Rachel and Ryan, USA</span>
                </div>
                {/* <!-- end of single customer -->
                <!-- single customer --> */}
                <div className = "customer">
                    <div className = "rating">
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "far fa-star"></i></span>
                    </div>
                    <h3>Génialissime</h3>
                    <p>Nous avons passé un incroyable séjour dans la yourte mongole. Le lit est treès confortable et la décoration est soignée. Nous avions vraiment l'impression de vivre dans la step mongolienne en pleine nature. Nous reviendrons pour quelques jours cette fois-ci.</p>
                    <img src = {img7} alt = "customer image"></img>
                    <span>Eric et Fanny, France</span>
                </div>
                {/* <!-- end of single customer -->
                <!-- single customer --> */}
                <div className = "customer">
                    <div className = "rating">
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "fas fa-star"></i></span>
                        <span><i className = "far fa-star"></i></span>
                    </div>
                    <h3>Très bel endroit</h3>
                    <p>La tente safari ets très spacieuse et confortable. Nous avons passé 3 nuits dans ce lieu de quiétude et le propriétaire nous a fait découvrire sa propriété. La tente safari offre un cadre atipyque autour de la brousse calédonienne. Nous recomandons fortement !</p>
                    <img src = {img8} alt = "customer image"></img>
                    <span>Anne et Bastien, Bourail</span>
                </div>
                {/* <!-- end of single customer --> */}
            </div>
        </div>
    </section>
  );
};

export default Customers;
