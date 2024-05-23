// src/components/Header.js
import React from 'react';

const Header = () => (
  <header>
    <h1>VIVA ITALIA</h1>
    <img src="/logo1.png" alt="VIVA ITALIA" id="logo1" />
    <nav>
      <button><a href="#desayunos">Desayunos</a></button>
      <button><a href="#almuerzos">Almuerzos</a></button>
      <button><a href="#comidas">Comidas</a></button>
      <button><a href="#entradas">Entradas</a></button>
      <button><a href="#menu-infantil">Menú Infantil</a></button>
      <button><a href="#bebidas">Bebidas</a></button>
    </nav>
  </header>
);

export default Header;
