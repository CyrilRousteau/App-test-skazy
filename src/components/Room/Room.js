import React from 'react';
import "./styles.scss";
import  img4  from "../../assets/images/img4.jpg";
import  img5  from "../../assets/images/img5.jpg";
import  img6  from "../../assets/images/img6.jpg";


const Room = () => {
  return (
    <section className = "rooms sec-width" id = "rooms">
    <div className = "title">
        <h2>CHAMBRES</h2>
    </div>
    <div className = "rooms-container">
        {/* <!-- single room --> */}
        <article className = "room">
            <div className = "room-image">
                <img src = {img4} alt = "room image"></img>
            </div>
            <div className = "room-text">
                <h3>Yourte mongole</h3>
                <ul>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lit King-Size + extra-Bed.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Sanitaires exterieurs.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Draps, bouilloire, frigo et ventilateur fournis.
                    </li>
                </ul>
                <p>Cette yourte mongole joliement décorée avec des meubles asiatiques authentiques saura vous faire voyager le temps d'un séjour inoubliable. Située sur notre propriétée privée, vous bénéficierez d'un espace verdoyant, calme et ressourçant. </p>
                <p>Des sanitaires et une cuisine toute équipée se trouve dans l' espace commun. Il est également possible de commander de bons petits plats locaux concoctés de votre hôte Cyril.</p>
                <p className = "rate">
                    <span>5000 fr /</span> Par Nuit en semaine
                </p>
                <p className = "rate">
                    <span>7000 fr /</span> Par Nuit le week-end
                </p>
                <button type = "button" className = "btn">réservez maintenant</button>
            </div>
        </article>
        {/* <!-- end of single room --> */}
        {/* <!-- single room --> */}
        <article className = "room">
            <div className = "room-image">
                <img src = {img6} alt = "room image"></img>
            </div>
            <div className = "room-text">
                <h3>Tente Safari</h3>
                <ul>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lit King-Size + extra-Bed.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Sanitaires exterieurs.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Draps, bouilloire, frigo et ventilateur fournis.
                    </li>
                </ul>
                <p>Cette tente safari joliement décorée avec des meubles africains authentiques saura vous faire voyager le temps d'un séjour inoubliable. Située sur notre propriétée privée, vous bénéficierez d'un espace verdoyant, calme et ressourçant.</p>
                <p>Des sanitaires et une cuisine toute équipée se trouve dans l' espace commun. Il est également possible de commander de bons petits plats locaux concoctés de votre hôte Cyril.</p>
                <p className = "rate">
                    <span>5000 fr /</span> Par Nuit en semaine
                </p>
                <p className = "rate">
                    <span>7000 fr /</span> Par Nuit le week-end
                </p>
                <button type = "button" className = "btn">réservez maintenant</button>
            </div>
        </article>
        {/* <!-- end of single room -->
        <!-- single room --> */}
        <article className = "room">
            <div className = "room-image">
                <img src = {img5} alt = "room image"></img>
            </div>
            <div className = "room-text">
                <h3>Cabane O Perchée</h3>
                <ul>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Lit King-Size + extra-Bed.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Sanitaires exterieurs.
                    </li>
                    <li>
                        <i className = "fas fa-arrow-alt-circle-right"></i>
                        Draps, bouilloire, frigo et ventilateur fournis.
                    </li>
                </ul>
                <p>Cette cabane perchée joliement décorée avec des meubles naturels saura vous détendre le temps d'un séjour inoubliable. Située sur notre propriétée privée, vous bénéficierez d'un espace verdoyant, calme et ressourçant.</p>
                <p>Des sanitaires et une cuisine toute équipée se trouve dans l' espace commun. Il est également possible de commander de bons petits plats locaux concoctés de votre hôte Cyril.</p>
                <p className = "rate">
                    <span>5000 fr /</span> Par Nuit en semaine
                </p>
                <p className = "rate">
                    <span>7000 fr /</span> Par Nuit le week-end
                </p>
                <button type = "button" className = "btn">réservez maintenant</button>
            </div>
        </article>
        {/* <!-- end of single room --> */}
    </div>
</section>

  );
};

export default Room;
