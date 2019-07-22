import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/index'
import AppZ from './pages/appZ'

function App() {
  return (     
    <BrowserRouter>
      <Index/>
      <Route path="/ar" exact component={Index} />
      <Route path="/appZ" component={AppZ} />
    </BrowserRouter>    
  );
}

export default App;
//<Hiro />
/*  {this.state.modal ? <ModalLogin openModal={this.modalSesion} /> : null} */