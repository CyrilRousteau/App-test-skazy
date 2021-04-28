import React from 'react';
import "./styles.scss";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error-title"> 404</h1>
      <p className="error-text">Oups .. une erreur s'est produite</p>
      <button type = "button"><a href="#header">Retour à l'accueil</a></button>
    </div>
  );
};

export default Error;
