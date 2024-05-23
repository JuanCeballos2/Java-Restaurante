// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Asegúrate de tener los estilos adecuados

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={item.image} alt={item.description} />
        <h3>{item.description}</h3>
        <p><strong>Precio: {item.price}</strong></p>
        <p>{item.detailedDescription}</p>
        <button onClick={onClose}>Regresar</button>
      </div>
    </div>
  );
};

export default Modal;
