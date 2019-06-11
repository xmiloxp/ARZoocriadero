import React, { Component } from 'react';
import '../styles/styles.sass';
import ModalLogin from '../components/modal'

class Index extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            modal: false
        };
    }

    modalSesion = () =>{
        this.setState((prevState) =>({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <nav>
                    <a className="titulo" href='/'>AR Zoocriadero</a>
                    <a className="waves-effect waves-light btn boton" onClick={this.modalSesion}>Iniciar Sesion</a>
                </nav> 
                {this.state.modal? <ModalLogin openModal={this.modalSesion}/>:null}
            </div>
        );
    }
}

export default Index;


/*<a-scene embedded arjs='sourceType: webcam;'>                                       
                <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene> */