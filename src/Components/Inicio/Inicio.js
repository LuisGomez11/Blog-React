// Dependencias
import React, { Component } from 'react';

// CSS
import './Inicio.css';


class Inicio extends Component {
  render() {
    return (
      <div className="Inicio">
	  <p id="noticia"></p>
          <input id="texto" type="text" placeholder="Escribe una nueva noticia..." ></input>
	  <input id="boton" type="submit" value="Publicar" onclick="publicar()"></input>
      </div>
    );
  }
}

export default Inicio;
