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
                <a-scene embedded arjs='sourceType: webcam;'>
                    <nav>
                        <a class="titulo" href='/'>AR Zoocriadero</a>
                        <a class="waves-effect waves-light btn">Iniciar Sesion</a>
                    </nav>
                    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
                    <a-marker-camera preset='hiro'></a-marker-camera>
                </a-scene>
            </div>
        )
    }
}

export default Index;