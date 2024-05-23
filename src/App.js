import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Modal from './components/Modal';
import './styles.css';

const App = () => {
  const [modalItem, setModalItem] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const sections = [
    {
      id: 'desayunos',
      title: 'DESAYUNOS',
      items: [
        {
          id: 16,
          image: '/imagenes/desayuno.italiano.jpg',
          description: 'Cruasanes con capuchino',
          detailedDescription:
            'Es posible que, por las prisas, no te dé tiempo a deleitarte en el desayuno. Sin embargo, todos los habitantes de Italia siempre tienen hueco para un capuchino y un cruasán.',
          price: '10.000',
        },
        {
          id: 17,
          image: '/imagenes/desayuno2.italiano.jpg',
          description: 'Huevos y salchichas italianas al horno',
          detailedDescription:
            'Quienes prefieran un desayuno salado en toda regla no pueden dejar de pedir un plato de huevos y salchichas italianas hecho al horno',
          price: '18.000',
        },
      ],
    },
    {
      id: 'almuerzos',
      title: 'ALMUERZOS',
      items: [
        {
          id: 1,
          image: '/imagenes/almuerzo.italiano.jpg', 
          description: 'Lasaña',
          detailedDescription: 'La receta de lasaña más conocida, la tradicional, es la de carne a la boloñesa. Se trata de un plato muy completo y equilibrado, de fama mundial.',
          price: '25.000',
        },
        {
          id: 2,
          image: '/imagenes/almuerzo2.italiano.jpg',
          description: 'Pasta Magica',
          detailedDescription: 'Deléitate con nuestra pasta italiana llamativa: una explosión de colores, sabores y aromas que te transportan a Italia en cada bocado. ',
          price: '25.000',
        },
      ],
    },
    
    {
      id: 'comidas',
      title: 'CENAS',
      items: [
        {
          id: 4,
          image: '/imagenes/comida.italiano.jpg',
          description: 'Pizza Italiana',
          detailedDescription: 'Sumérgete en el auténtico sabor de Italia con nuestras pizzas artesanales. Desde la primera mordida, te transportarán a las soleadas calles de Nápoles. ',
          price: '30.000',
        },
        {
          id: 5,
          image: '/imagenes/comida2.italiano.jpg',
          description: 'Rissotto',
          detailedDescription: 'Viaja a las colinas de la región italiana de Lombardía con nuestro exquisito risotto. Preparado con arroz carnaroli de la más alta calidad y mezclado con ingredientes frescos y sabrosos, cada bocado es una experiencia culinaria inolvidable. ',
          price: '30.000',
        },
      ],
    },
    {
      id: 'entradas',
      title: 'ENTRADAS',
      items: [
        {
          id: 6,
          image: '/imagenes/entrada.italiano.jpg',
          description: 'Vieiras al Horno',
          detailedDescription: 'Uno de los mariscos con sabor suave. Es rociado con pan rallado y una serie de ingredientes, luego llevado al horno da como resultado, una exquisita receta.',
          price: '22.000',
        },
        {
          id: 7,
          image: '/imagenes/entrada2.italiano.jpg',
          description: 'Bruschetta con setas silvestres',
          detailedDescription: 'Deliciosas tostadas de pan con setas silvestres glaseadas. Una entrada fácil',
          price: '18.000',
        },
        {
          id: 8,
          image: '/imagenes/entrada3.italiano.jpg',
          description: 'Gambas Fritas',
          detailedDescription: 'Las gambas fritas son probablemente una de las mejores tapas que puedan existir.',
          price: '17.000',
        },
      ],
    },
    {
      id: 'menu-infantil',
      title: 'MENÚ INFANTIL',
      items: [
        {
          id: 9,
          image: '/imagenes/menuinfantil.italiano.jpg',
          description: 'Stromboli',
          detailedDescription: 'La Stromboli es una de esas recetas perfectas para que tus hijos disfruten de una delicia italiana de vez en cuando. Se trata de una empanada italiana que consiste en una masa de pizza cubierta con tomate y con rodajas de pepperoni, salchicha y mozarella.',
          price: '18.000',
        },
        {
          id: 10,
          image: '/imagenes/menuinfantil2.italiano.jpg',
          description: 'La Focaccia',
          detailedDescription: 'La focaccia, un plato italiano en el que puedes aprovechar y meter algunas verduras para alimentar bien a tus hijos, es además una receta perfecta para vegetarianos.',
          price: '21.000',
        },
        {
          id: 11,
          image: '/imagenes/menuinfantil3.italiano.jpg',
          description: 'Pastel de Rigatoni',
          detailedDescription: 'El pastel de rigatoni con carne picada es un manjar italiano que debe probar toda tu familia. Cuece una buena cantidad de pasta rigatoni con mucha agua ',
          price: '21.000',
        },
      ],
    },
    {
      id: 'bebidas',
      title: 'BEBIDAS',
      items: [
        {
          id: 12,
          image: '/imagenes/bebida.italiano.jpg',
          description: 'Limoncello',
          detailedDescription: 'Este aromático licor con sabor a limón, surgió a inicios del s. XX en Capri (Italia). Sin duda, es una de las bebidas italianas más conocidas en todo el mundo.',
          price: '12.000',
        },
        {
          id: 13,
          image: '/imagenes/bebida2.italiano.jpg',
          description: 'Fernet',
         
          detailedDescription: ' Sin duda no es una bebida ‘para todo el mundo’, es algo amarga y puede resultar impactante para quien lo prueba por primera vez.',
          price: '18.000',
        },
        {
          id: 14,
          image: '/imagenes/bebida3.italiano.jpg',
          description: 'Caffe Late',
         
          detailedDescription: 'Es un café con leche que también puedes pedir de varias formas en Italia: Latte Macchiato (con mucha leche y poco café), Caffé Macchiato (con mucho café y poca leche), etc.',
          price: '8.000',
        },
        {
          id: 15,
          image: '/imagenes/bebida4.italiano.jpg',
          description: 'Gaseosas',
         
          detailedDescription: 'Cualquier tipo de bebida gaseosa que desees',
          price: '6.000',
        },
      ],
    },
  ];

  const handleQuickView = (item) => {
  if (item.submenu) {
    setShowSubmenu(true);
  } else if (item.id) {
    setModalItem(item);
  }
};


  const handleCloseModal = () => {
    setModalItem(null);
    setShowSubmenu(false);
  };

  return (
    <div className="App main-container">
      <Header />
      <main>
        {sections.map((section) => (
          <Section
            key={section.id}
            {...section}
            onQuickView={handleQuickView}
          />
        ))}
      </main>
      {modalItem && (
        <Modal
          show={!!modalItem}
          item={modalItem}
          onClose={handleCloseModal}
        />
      )}
      {showSubmenu && (
        <div className="submenu-container">
          {sections
            .find((section) => section.id === 'almuerzos')
            .items[0].submenu.map((item) => (
              <Section
                key={item.id}
                id={item.id}
                title={item.description}
                items={[item]}
                onQuickView={handleQuickView}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
