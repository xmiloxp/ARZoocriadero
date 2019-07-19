import React, { Component } from 'react';
import ModalLogin from './modal';
import { Link } from 'react-router-dom'

//import Ahiro from '../components/hiro/Hiro'
import '../styles/styleApp.css'

export default class Index extends Component {
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
                    <a className="titulo" href="/">AR Zoocriadero</a>
                    <Link className="waves-effect waves-light btn boton" onClick={this.modalSesion}>Iniciar Sesion</Link>
                </nav>
                {this.state.modal ? <ModalLogin openModal={this.modalSesion} /> : null}

            </div>
        );        
    }
}
