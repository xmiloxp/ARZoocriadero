import React, { Component } from 'react';
import '../styles/styles.sass'

class Index extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
    }
    render() {
        return (
            <div>
                <nav>
                    <a className="titulo" href='/'>AR Zoocriadero</a>
                    <a className="waves-effect waves-light btn boton" href='/'>Iniciar Sesion</a>
                </nav> 
                <a-scene embedded arjs='sourceType: webcam;'>                                       
                <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
        );
    }
}

export default Index;