import React from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

import '../styles/styles.css';
import ModalLogin from '../pages/modal';

// ifconfig -> en0 -> inet -> https/x:3000

import Hiro from './hiro/Hiro';
// import Torus from './torus/Torus';
// import RollingScopes from './rollingScopes/RollingScopes';
// import Earth from './earth/Earth';
// import TrainTicket from './trainTicket/TrainTicket';
//import Railcard from './railcard/Railcard';


class App extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      modal: false
    };
  }

  modalSesion = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }));
  }
  
  render() {
    return (
      <div>
        <nav className="minav">
          <a className="titulo">AR Zoocriadero</a>
          <a className="waves-effect waves-light btn boton" onClick={this.modalSesion}>Iniciar Sesion</a>
        </nav>
        {this.state.modal ? <ModalLogin openModal={this.modalSesion} /> : null}
      <Hiro />
      
      </div>
    );
    // <Torus />
      // <Earth />
      // <RollingScopes />
      // <TrainTicket />
      //<Railcard />
  }
}

render(<App />, document.getElementById('root'));

export default App;
