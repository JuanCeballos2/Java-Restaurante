import React from 'react';

const Section = ({ id, title, items, onQuickView, modalItem }) => (
  <section id={id} className="Proyectos">
    <div className="contenido-seccion">
      <h2>{title}</h2>
      <div className="galeria">
        <div className="fila">
          {items.map((item, index) => (
            <div key={index} className="col">
              <div className="Proyecto" onClick={() => onQuickView(item)}>
                <img src={item.image} alt={item.description} />
                <div className="overlay">
                  <h3>{item.description}</h3>
                  <p>Vista previa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalItem && (
        <div className="submenu-container">
          {modalItem.submenu.map((item) => (
            <div key={item.id} className="col">
              <div className="Proyecto" onClick={() => onQuickView(item)}>
                <img src={item.image} alt={item.description} />
                <div className="overlay">
                  <h3>{item.description}</h3>
                  <p>Vista previa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default Section;
