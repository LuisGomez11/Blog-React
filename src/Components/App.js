// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import './App.css';

// Componentes
import Navegacion from './Navegacion/Nav';
import Contenido from './Contenido';

// Data
import items from '../Data/Menu';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {

    const {children} = this.props;

    return (
      <div className="App">
        <Navegacion title="Blog" items={ items }/>
        <Contenido body={children}/>
      </div>
    );
  }
}

export default App;